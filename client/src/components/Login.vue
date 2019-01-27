<template id="loginpage">
  <div class="main">
      <div class="vue-component">
      <div class="ascContainer">
        <div class="container">
          <div class="loginLogoCon">
            <img src="../assets/csg-logo.png" class="loginLogo">
          </div>

          <ul>
            <li class="text-danger" v-for="(error, i) in errors" :key="i">{{ error }}</li>
          </ul>
          <div class="form-group">
            <label>Email:</label>
            <input type="email" class="form-control" v-model="email">
          </div>
          <div class="form-group">
            <label>Password:</label>
            <input type="password" class="form-control" v-model="password">
          </div>
          <button class="btn btn-primary btn-login" v-on:click="submit()">Submit</button>
          <br/>
          <br/>
           <a href="#" target="_blank">Forgot your password?</a>
           <br/>
           <br/>
           <a href="/#/signup" target="_blank">Create an account</a>
      </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit () {
      var params = {
        auth: { email: this.email, password: this.password }
      }
      let self = this
      axios
        .post("/employee_token", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/home");
        })
        .catch(
          function() {
           self.errors = ["Invalid email or password."];
           self.email = "";
           self.password = "";
          }
        );
    }
  }
}
</script>

<style scoped>
.ascContainer{
  min-width : 450px;
  min-height : 550px;
  margin-left: 1200px;
  top:20%;
  position:absolute;
  background-color:#FFFFFF;

}
.main{
  background-image: url("../assets/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 1050px;
}
.loginLogoCon{

  margin-top: 50px;
  
}

.loginLogo{
    max-width:250px;
    align:right;
  }
  .btn-login{
    width:100%;
    border-radius: 0px 0px 0px 0px;
  }
</style>
