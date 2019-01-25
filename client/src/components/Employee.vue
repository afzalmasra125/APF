<template id="employees-index-page">
  <div class="vue-component">
    <div class="container">
      <div class="card-block">
        <div></div>
        <table class="table">
          <thead>
            <input type="text" v-model="search" placeholder="Search Name..." />
            <tr>
              <th>First Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in filteredEmployees" :key="employee.id">
              <th>{{ employee.first_name }} {{employee.last_name }}</th>
              <td>
                <a
                  class="btn btn-primary"
                  v-bind:href="'/#/employees/' + employee.id"
                >
                  Reviews</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function() {
    return {
      employees: [],
      search: ""
    };
  },
  created: function() {
    const token = localStorage.getItem('jwt')
    axios.get("/manager_employees", { headers: {"Authorization" : `Bearer ${token}`}}).then(
      function(response) {
        this.employees = response.data;
      }.bind(this)
    );
  },
  mounted: function() {},
  methods: {},
  computed: {
    filteredEmployees: function() {
      let employees = [];
      for (var i = this.employees.length - 1; i >= 0; i--) {
        const firstName = this.employees[i].first_name || "";
        const lastName = this.employees[i].last_name || "";
        const fullName = firstName + lastName;
        if (fullName.toLowerCase().includes(this.search.toLowerCase())) {
          employees.push(this.employees[i]);
        }
      }
      return employees;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
