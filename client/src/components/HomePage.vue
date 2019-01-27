<template id="home-page">
  <div class="vue-component">
  <div> 
   <img src="../assets/csg-logo.png" class="loginLogo">
  </div>
    <div class="name">
      {{first_name}}
    </div>
    <div class="logout">
      <a v-bind:href="'/#/logout' ">LOG OUT</a>
    </div>
    <div>
    <hr class="menu" align="left" width="100%" solid="15px" color="#d9d9d9" >
    </div>
    <div class="asc-container">
    <div class="container">
    <div class="profileContainer">
      <label><b><h3>Agile Performance Review</h3></b></label>
    </div>
    <a class="btn btn-primary btn-home" v-bind:href="'/#/reviews/new' ">Create Review</a>
      <a id="manager" :class="'btn btn-primary btn-home ' + (managerStatus ? '' : 'disabled') " v-bind:href="'/#/employees' ">View Review</a>
      <a id="manager" :class="'btn btn-primary btn-home ' + (managerStatus ? '' : 'disabled') " v-bind:href="'/#/reviews/pending' ">Pending Review</a>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
data: function() {
    return {
      first_name:"",
      managerStatus: false
    };
  },
  created: function() {
    const token = localStorage.getItem("jwt");
    axios.get("/current_employee", { headers: {"Authorization" : `Bearer ${token}`} })
      .then((response) => {
        const employee = response.data
        this.managerStatus = employee.manager_status
        this.first_name = employee.first_name
      })

  },
  methods: {},
  computed: {}
};
</script>

<style scoped>
.profileContainer{
    margin-top:3%;

}
.asc-container{
  min-width : 650px;
  min-height : 350px;
  margin-left: 35%;
  top:30%;
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
   .name {
      right: 6.7%;
      top: 2.5%;
      font-size: 24px;
      position:absolute;
  }
  .logout{
    right: 1.5%;
    top: 3.1%;
    font-size: 18px;
    position:absolute;
  }
  .menu
  {
     top: 7%;
      position:absolute;
  }
  .loginLogo{
    max-width:250px; 
    top: 2%;
    align:right;
  }
</style>
