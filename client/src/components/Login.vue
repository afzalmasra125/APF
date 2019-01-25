<template id="loginpage">
  <div class="vue-component">
    <div class="container">
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
      <button class="btn btn-primary" v-on:click="submit()">Submit</button>
      <a v-bind:href=" '/#/signup'" class="btn btn-secondary float-middle">Sign Up </a>
      <br/>
       <a href="#" target="_blank">Forgot your password?</a>
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
            this.errors = ["Invalid email or password."];
            this.email = "";
            this.password = "";
          }
        );

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
