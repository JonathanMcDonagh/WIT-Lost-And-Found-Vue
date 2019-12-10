<template>
  <div id="app">
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/witnavlogo.png" class="navlogo" style="padding: 5px">
      <b-navbar-brand to="/" class="heading">WIT Lost And Found</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/"><i class="fa fa-graduation-cap" style="padding: 5px"> Home</i></b-nav-item>
          <b-nav-item to="/items"><i class="fa fa-list-ul" style="padding: 5px"> Manage Lost Items</i></b-nav-item>
          <b-nav-item to="/lostitem"><i class="fa fa-plus-square-o" style="padding: 5px"> Report Lost Item</i></b-nav-item>
          <b-nav-item to="/map"><i class="fa fa-map-marker" style="padding: 5px"> Map</i></b-nav-item>
          <b-nav-item to="/about"><i class="fa fa-user-secret" style="padding: 5px"> About Us</i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Account" right>
            <b-nav-item to="/Login"><i class="fa fa-user-plus" style="padding: 5px"> Sign In </i></b-nav-item>
            <b-nav-item @click="logout"><i class="fa fa-user-plus" style="padding: 5px"> Logout </i></b-nav-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {

  name: 'App',
  data () {
    return {
      user: null
    }
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(
        (user) => {
          this.$router.replace('/#/')
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      )
    }
  }
}
</script>

<style>
  #app {
    font-family:helvetica neue,Helvetica,Roboto,Arial,sans-serif;
    font-size:1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .VueTables__sortable {
    cursor: pointer;
  }

  .bg-dark {
    background-color: grey !important;
  }

  i.fa.fa {
    color: white;
  }

  li.nav-item:hover {
    background-color: #0D3C51;
    color: #ffffff;
  }

  a.navbar-brand.router-link-exact-active.router-link-active {
    color: #E82025;
  }

  .nav-link.router-link-exact-active.router-link-active {
    text-decoration: underline;
  }

  .navlogo {
    padding: 5px;
    height: 50px;
    width: 50px;
  }

  #__BVID__47__BV_button_ > span {
    font-weight: bold;
    color: white;
  }

  ul.dropdown-menu.dropdown-menu-right.show {
    background-color: grey;
  }
</style>
