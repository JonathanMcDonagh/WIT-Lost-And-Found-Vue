<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="items" :options="options">
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
      columns: ['_id', 'studentid', 'name', 'WITBuilding', 'WITRoom', 'lostitem', 'likes'],
      options: {
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
