<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-comment" style="padding: 3px"></i>{{messagetitle}}</h3>
  </div>
</template>

<script>export default {name: 'Contact', data () { return {messagetitle: ' Contact WIT Lost And Found '} }}
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 40pt;
    margin-bottom: 10px;
  }
</style>
