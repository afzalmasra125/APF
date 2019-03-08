<template id="loginpage">
  <div id="backgroundImage" class="container-fluid">
    <div class="container-fluid h-100">
      <div class="row align-items-center h-100 no-gutters">
        <div class="offset-lg-8"></div>
        <div class="col-12 col-sm-10 col-lg-3 mx-auto">
          <div class="container p-4 bg-white h-100">
            <div class="container">
              <img src="../assets/csg-logo.png" class="img-fluid" />
            </div>
            <div class="container">
              <form v-on:submit.prevent="submit()">
                <ul>
                  <li class="text-danger" v-for="(error, i) in errors" :key="i">
                    {{ error }}
                  </li>
                </ul>

                <div class="form-group">
                  <label class="text-muted">Email</label>
                  <input
                    type="email"
                    class="bg-light form-control"
                    v-model="email"
                  />
                </div>
                <div class="form-group">
                  <label class="text-muted">Password</label>
                  <input
                    type="password"
                    class="bg-light form-control"
                    v-model="password"
                  />
                </div>
                <input
                  type="submit"
                  class="btn btn-primary btn-block"
                  value="SIGN IN"
                />
              </form>
            </div>
            <div class="container my-4">
              <div class="text-center">
                <a href="#">Forgot your password?</a>
              </div>
              <div class="text-center">
                <a href="/#/signup">Create an account</a>
              </div>
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
