<template id="home-page">
  <div class="vue-component">
    <div class="container">
    <a class="btn btn-primary" v-bind:href="'/#/reviews/new' ">Create Review</a>
      <a id="manager" :class="'btn btn-primary ' + (managerStatus ? '' : 'disabled') " v-bind:href="'/#/employees' ">View Review</a>
      <a id="manager" :class="'btn btn-primary ' + (managerStatus ? '' : 'disabled') " v-bind:href="'/#/reviews/pending' ">Pending Review</a>
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
import axios from 'axios'
export default {
data: function() {
    return {
      managerStatus: false
    };
  },
  created: function() {
    const token = localStorage.getItem("jwt");
    axios.get("/current_employee", { headers: {"Authorization" : `Bearer ${token}`} })
      .then((response) => {
        const employee = response.data
        this.managerStatus = employee.manager_status
      })

  },
  methods: {},
  computed: {}
};
</script>

<style scoped>
</style>
