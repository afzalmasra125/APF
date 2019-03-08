<template id="loginpage">
  <div id="backgroundImage" class="container-fluid">
    <div class="container-fluid h-100">
      <div class="row align-items-center justify-content-end h-100">
        <div class="col-4 h-75 mr-5 d-inline-block px-5">
          <div class="container h-100 d-inline-block bg-white">
            <div class="container px-5 mt-4">
              <img src="../assets/csg-logo.png" class="img-fluid" />
            </div>
            <ul>
              <li class="text-danger" v-for="(error, i) in errors" :key="i">
                {{ error }}
              </li>
            </ul>
            <div class="container">
              <div class="form-group">
                <label>Email:</label>
                <input type="email" class="form-control" v-model="email" />
              </div>
              <div class="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                />
              </div>
              <button class="btn btn-primary btn-login" v-on:click="submit()">
                Submit
              </button>
            </div>
            <div class="container">
              <a class="h-100 mx-auto" href="#" target="_blank"
                >Forgot your password?</a
              >
            </div>
            <div class="container">
              <a href="/#/signup">Create an account</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit() {
      var params = {
        auth: { email: this.email, password: this.password }
      };
      let self = this;
      axios
        .post("/employee_token", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/home");
        })
        .catch(function() {
          self.errors = ["Invalid email or password."];
          self.email = "";
          self.password = "";
        });
    }
  }
};
</script>
<style scoped>
#backgroundImage {
  background-image: url("../assets/background.png");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.btn-login {
  width: 100%;
}
</style>
