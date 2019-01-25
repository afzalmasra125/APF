<template id="pending-reviews-page">
  <div class="vue-component">
    <div class="container">
      <h2>Pending Reviews</h2>
      </br>
      <div class="form-group" style="width:500px;">
        <label>Manager</label>
         <select class= "form-control"  v-model="selectedManager">
          <option value="">Select</option>
          <option
            v-for="employee in employees"
            :value="employee.id"
            v-if="employee.manager_status == true">
            {{employee.first_name}} 
            {{employee.last_name}}
          </option>
        </select>
       </div> 
       </br>
      <div class="form-group" style="width:500px;">
      <div>
        <label>Employee</label>
        <select class= "form-control" v-model="selectedEmployee">
          <option value="">Select</option>
          <option
            v-for="employee in managedEmployees"
            :value="employee.id" >
            {{employee.first_name}} 
            {{employee.last_name}}
          </option>
        </select>
        </div> 
        </div>
      </br>
      <div div class="card">
     <div class="container">
        <h3>Employees Reviewed</h3>
        <ul>
          <li v-for="review in reviewedEmployees">{{review.reviewee.first_name + " " + review.reviewee.last_name}}</li>
        </ul> 
      </div>
         </div> 
       </br>
    <div div class="card">
     <div class="container">
        <h3>Employees to be Reviewed</h3>
        <ul>
          <li v-for="employee in unreviewedEmployees" :key="employee.id">
            {{employee.first_name + " " + employee.last_name}}
          </li>
        </ul>
      </div>
    </div>
      </br>
        <button class="btn btn-primary"> Send Request </button>      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: function() {
    return {
      reviews: [],
      employees: [],
      review: {
        reviewer_id: "",
        reviewee_id: "",
        relationship: "",
        judgement: "",
        leadership: "",
        technical: "",
        positive_feedback: "",
        needs_improvement: ""
      },
      selectedManager: "",
      selectedEmployee: "",
      reviewedEmployeeIds: [],
      unreviewedEmployees: []
    };
  },
  created: function() {
    const token = localStorage.getItem('jwt')
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    axios
      .get("/pending_reviews")
      .then(function(response) {
        this.reviews = response.data;
      }.bind(this));

    axios
      .get("/employees") 
      .then(function(response) {
        this.employees = response.data;
        console.log(this.employees);
      }.bind(this));
  },
  methods: {},
  computed: {
    managedEmployees() {
      if (!this.selectedManager){
        return [];
      }
      return this.employees
        .filter(employee => this.selectedManager === employee.manager_id)
    },
    reviewedEmployees() {
      if (!this.selectedEmployee) {
        return [];
      }
      this.reviewedEmployeeIds = this.reviews
        .filter(review => this.selectedEmployee === review.reviewer_id)
        .map(review => review.reviewee.id)

      this.unreviewedEmployees = this.employees
        .filter(employee => !this.reviewedEmployeeIds.includes(employee.id))

      return this.reviews
        .filter(review => this.selectedEmployee === review.reviewer_id)
    }
  }
};
  </script>