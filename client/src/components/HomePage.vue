<template id="home-page">
  <div class="vue-component">
  <a class="" v-bind:href="'/#/logout' ">Logout</a>
    <div class="asc-container">
    <div class="container">
    <div class="profileContainer">
      <label>Agile Performance Review</label>
    </div>
    <a class="btn btn-primary btn-home" v-bind:href="'/#/reviews/new' ">Create Review</a>
      <a id="manager" :class="'btn btn-primary btn-home ' + (managerStatus ? '' : 'disabled') " v-bind:href="'/#/employees' ">View Review</a>
      <a id="manager" :class="'btn btn-primary btn-home ' + (managerStatus ? '' : 'disabled') " v-bind:href="'/#/reviews/pending' ">Pending Review</a>
      <br />
      <br />
      <br />
      <hr />
      
      <br />
    </div>
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
.asc-container{
  min-width : 650px;
  min-height : 350px;
  margin-left: 35%;
  top:20%;
  position:absolute;
  background-color:#FFFFFF;
  

  box-sizing: content-box;
    box-shadow: 2px 2px #d9d9d9;
    border: solid 5px #d9d9d9;
    border-radius:4px;
}

.btn-home{
    width:90%;
    border-radius: 0px 0px 0px 0px;
    margin-top:10px;
    min-height :45px;
    margin-left:5%;
  }

  .profileContainer{
    text-align: center;
    font-size: larger;

  }
</style>
