<template id="loginpage">
  <div id="backgroundImage" class="container-fluid">
    <div class="row">
      <div class="col-3 bg-white">
        <div class="loginLogoCon">
          <img src="../assets/csg-logo.png" class="loginLogo" />
        </div>
        <ul>
          <li class="text-danger" v-for="(error, i) in errors" :key="i">
            {{ error }}
          </li>
        </ul>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email" />
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password" />
        </div>
        <button class="btn btn-primary btn-login" v-on:click="submit()">
          Submit
        </button>
        <br />
        <br />
        <a href="#" target="_blank">Forgot your password?</a>
        <br />
        <br />
        <a href="/#/signup">Create an account</a>
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

.loginLogoCon {
  margin-top: 50px;
}

.loginLogo {
  /*max-width: 250px;*/
  /*align: right;*/
  width: 75%;
}

.btn-login {
  width: 100%;
  border-radius: 0px 0px 0px 0px;
}
</style>
