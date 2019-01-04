<template id="home-page">
  <div class="vue-component">
    <div class="container">
      <a class="btn btn-primary" v-bind:href="'/#/reviews/new' ">Create Review</a>
      <a class="btn btn-primary" v-bind:href="'/#/employees' ">View Review</a>
      <a class="btn btn-primary" v-bind:href="'/#/reviews/pending' ">Pending Reviews</a>
      <br />
      <br />
      <br />
      <hr />
      <a class="btn btn-danger" v-bind:href="'/#/logout' ">Logout</a>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      employees:[]
    };
  },
  created: function() {
  },
  methods: {},
  computed: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
