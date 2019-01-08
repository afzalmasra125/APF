<template id="reviews-new-page">
  <div class="vue-component">
    <div class="container">
      <h2>Review</h2>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
       <div class="form-group" style="width:500px;">
        <label>Manager</label>
        <select class="form-control" v-model="manager_id" @change="getEmployees">
          <option value="">Select</option>
          <option v-for="manager in managers" :value=manager.id>
           {{manager.first_name}}
           {{manager.last_name}}
          </option>
        </select>
      </div>
         </br>
      <div class="form-group" style="width:500px;">
        <label>Employee Name in my group</label>
        <select class="form-control" v-model="reviewee_id">
          <option value="">Select</option>
          <option v-for="employee in employees_names" :value=employee.id>
            {{employee.first_name}}
            {{employee.last_name}}
          </option>
        </select>
      </div>
         </br>
          <div class="form-group" style="width:500px;">
        <label>Relationship</label>
        <select class= "form-control" v-model="relationship">
        <option value="">Select</option>
        <option value="0">Peer</option>
        <option value="1">Self</option>
        </select>
      </div>
      <div class="form-group" style="width:500px;">
        <label>Judgement</label>
        <select class="form-control" v-model="judgement">
        <option value="">Select</option>
        <option value="0">Does not meet expectation</option>
        <option value="1">Partially meet expectation</option>
        <option value="2">Fully meet expectation</option>
        <option value="3">Exceed expectation</option>
      </select>
      </div>
      <div class="form-group" style="width:500px;" >
        <label>Teamwork</label>
        <select class="form-control" v-model="teamwork">>
        <option value=""> Select</option>
        <option value="0">Does not meet expectation</option>
        <option value="1">Partially meet expectation</option>
        <option value="2">Fully meet expectation</option>
        <option value="3">Exceed expectation</option>
       </select>
      </div>
      <div class="form-group" style="width:500px;" >
        <label>Leadership</label>
        <select class= "form-control"  v-model="leadership">
        <option value="">Select</option>
        <option value="0">Does not meet expectation</option>
        <option value="1">Partially meet expectation</option>
        <option value="2">Fully meet expectation</option>
        <option value="3">Exceed expectation</option>
        </select>
      </div>
       <div class="form-group" style="width:500px;">
        <label>Technical</label>
      <select class= "form-control"  v-model="technical">
        <option value="">Select</option>
        <option value="0">Does not meet expectation</option>
        <option value="1">Partially meet expectation</option>
        <option value="2">Fully meet expectation</option>
        <option value="3">Exceed expectation</option>
        </select>
      </div>
       <div class="form-group">
        <label>Positive Feedback</label>
        <input type="text" class="form-control" v-model="positive_feedback" style="height:200px;" width = "500px">
      </div>
       <div class="form-group">
        <label>Needs Improvement</label>
        <input type="text" class="form-control" v-model="needs_improvement" style="height:200px;">
      </div>
        <button class="btn btn-primary" v-on:click="submit()">Submit</button>
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
      managers: [],
      employees_names: [],
      pending_reviews: [],
      errors: [],
      manager_id:"",
      reviewee_id: "",
      relationship: "",
      judgement: "",
      teamwork: "",
      leadership:"",
      technical: "",
      positive_feedback: "",
      needs_improvement: "",
    };
  },
  created: function() {
    axios
    .get("/manager")
      .then(function(response) {
        this.managers = response.data;
      }.bind(this) );
    axios
      .get("/pending_reviews")
      .then(function(response) {
        this.pending_reviews = response.data;
      }.bind(this) );
  },
  methods: {
    getEmployees: function() {
      axios
        .get("/manager/employees?manager_id=" + this.manager_id)
        .then(function(response) {
          this.employees_names = response.data;
        }.bind(this) );
    },
    submit: function() {
      var params = {
        reviewee_id: this.reviewee_id,
        relationship: this.relationship,
        teamwork: this.teamwork,
        technical: this.technical,
        leadership: this.leadership,
        positive_feedback: this.positive_feedback,
        needs_improvement: this.needs_improvement
      };
      axios
        .post("/reviews", params)
        .then(function(response) {
          router.push("/reviews");
        })
        .catch(
          function(error) {
            if (error.response.status === 401){
              router.push("/reviews");
            } else if (error.response.status === 422) {
              this.errors = error.response.data.errors;
            } else {
              router.push("/");
            }
          }.bind(this)
        );
    }
  }
};

</script>
