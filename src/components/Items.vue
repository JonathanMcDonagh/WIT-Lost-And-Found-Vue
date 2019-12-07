<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="items" :options="options">
        <a slot="like" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="like(props.row._id)"></a>
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteItem(props.row._id)"></a>
      </v-client-table>
    </div>
  </div>
</template>

<script>
import ItemService from '@/services/ItemService'
import Vue from 'vue'
import VueTables from 'vue-tables-2'
Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: 'Items',
  data () {
    return {
      messagetitle: ' Items List ',
      items: [],
      errors: [],
      props: ['_id'],
      columns: ['_id', 'studentid', 'name', 'WITBuilding', 'WITRoom', 'lostitem', 'likes', 'like', 'remove'
      ],
      options: {
        sortable: ['likes'],
        headings: {
          _id: 'ID',
          studentid: 'Student ID',
          name: 'Name',
          WITBuilding: 'WIT Building',
          WITRoom: 'WIT Room',
          lostitem: 'Lost ITem',
          likes: 'Likes'
        }
      }
    }
  },
  // Fetches Items when the component is created.
  created () {
    this.loadItems()
  },
  methods: {
    loadItems: function () {
      ItemService.fetchItems()
        .then(response => {
          // JSON responses are automatically parsed.
          this.items = response.data
          console.log(this.items)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    like: function (id) {
      ItemService.likeItem(id)
        .then(response => {
          // JSON responses are automatically parsed.
          this.loadItems()
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    deleteItem: function (id) {
      this.$swal({
        title: 'Are you sure you wish to delete this item?',
        text: 'You can\'t Undo this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete it',
        cancelButtonText: 'No take me back',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        console.log('SWAL Result : ' + result)
        if (result === true) {
          ItemService.deleteItem(id)
            .then(response => {
              // JSON responses are automatically parsed.
              this.message = response.data
              console.log(this.message)
              this.loadItems()
              // Vue.nextTick(() => this.$refs.vuetable.refresh())
              this.$swal('Deleted', 'You successfully deleted this Item ' + JSON.stringify(response.data, null, 5), 'success')
            })
            .catch(error => {
              this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          this.$swal('Cancelled', 'Glad to see!', 'info')
        }
      })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 80%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
