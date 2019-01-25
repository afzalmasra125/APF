<template id="signup-page">
  <div class="vue-component">
    <div class="container">
      <h1>Signup</h1>
      <ul>
        <li class="text-danger" v-for="(error, i) in errors" :key="i">{{ error }}</li>
      </ul>
      <div class="form-group">
        <div class="form-group">
          <label>First Name:</label>
          <input type="text" class="form-control" v-model="first_name"/>
        </div>
        <div class="form-group">
          <label>Last Name:</label>
          <input type="text" class="form-control" v-model="last_name">
        </div>
      </div>
      <div class="form-group">
        <label>Manager</label>
        <select class="form-control" v-model="managers">
          <option value="">Select</option>
          <option v-for="manager in managers" :value="manager.id" :key="manager.id">
           {{manager.first_name}}
           {{manager.last_name}}
         </option>
         </select>
       </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email">
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password">
      </div>
      <div class="form-group">
        <label>Password confirmation:</label>
        <input type="password" class="form-control" v-model="passwordConfirmation">
      </div>
      <button class="btn btn-primary" v-on:click="submit()">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: function() {
    return {
      first_name: "",
      last_name: "",
      email:"",
      password: "",
      passwordConfirmation: "",
      managers: [],
      errors: []
    };
  },
  created: function() {
    axios.get("/manager").then(
      function(response) {
        this.managers = response.data;
      }.bind(this) );
  },
  methods: {
    submit () {
      const params = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      }
      axios
        .post("/employees", params)
        .then((response) => {
          console.log(response)
          this.$router.push("/")
        })
        .catch(
          function(error) {
            this.errors = error.response.data.errors
          }
        )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
