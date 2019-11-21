<template>
  <div id="app">
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/witnavlogo.png" class="navlogo" style="padding: 5px">
      <b-navbar-brand to="/" class="heading">WIT Lost And Found</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/"><i class="fa fa-home" style="padding: 5px"> Home</i></b-nav-item>
          <b-nav-item to="/items"><i class="fa fa-list" style="padding: 5px"> Manage Lost Items</i></b-nav-item>
          <b-nav-item to="/lostitem"><i class="fa fa-plus" style="padding: 5px"> Report Lost Item</i></b-nav-item>
          <b-nav-item to="/map"><i class="fa fa-globe" style="padding: 5px"> Map</i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/about"><i class="fa fa-info" style="padding: 5px"> About Us</i></b-nav-item>
          <b-nav-item to="/contact"><i class="fa fa-comment" style="padding: 5px"> Contact Us</i></b-nav-item>
          <b-nav-item to="/login"><i class="fa fa-sign-in" style="padding: 5px"> Login </i></b-nav-item>
          <b-nav-item to="/logout"><i class="fa fa-sign-out" style="padding: 5px"> Logout </i></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>export default {name: 'App'}
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

  .navlogo {
    padding: 5px;
    height: 50px;
    width: 50px;
  }

</style>
