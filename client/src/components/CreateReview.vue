<template id="reviews-new-page">
  <div class="vue-component">
    <div class="asc-container">
      <div class="container">
        <div class="profileContainer">
          <h2>Review</h2>
          <ul>
            <li class="text-danger" v-for="error in errors" :key="error.id">
              {{ error }}
            </li>
          </ul>
          <div class="form-group" style="width:500px;">
            <label>Manager</label>
            <select
              class="form-control"
              v-model="manager_id"
              @change="getEmployees"
            >
              <option value="">Select</option>
              <option
                v-for="manager in managers"
                :value="manager.id"
                :key="manager.id"
              >
                {{ manager.first_name }}
                {{ manager.last_name }}
              </option>
            </select>
          </div>
          <br />
          <div class="form-group" style="width:500px;">
            <label>Employee Name in my group</label>
            <select class="form-control" v-model="reviewee_id">
              <option value="">Select</option>
              <option
                v-for="employee in employees_names"
                :value="employee.id"
                :key="employee.id"
              >
                {{ employee.first_name }}
                {{ employee.last_name }}
              </option>
            </select>
          </div>
          <br />
          <div class="form-group" style="width:500px;">
            <label>Relationship</label>
            <select class="form-control" v-model="relationship">
              <option value="">Select</option>
              <option value="0">Peer</option>
              <option value="1">Self</option>
            </select>
          </div>
          <div class="form-group" style="width:500px;">
            <label>Overall</label>
            <select class="form-control" v-model="judgement">
              <option value="">Select</option>
              <option value="0">Does not meet expectation</option>
              <option value="1">Partially meet expectation</option>
              <option value="2">Fully meet expectation</option>
              <option value="3">Exceed expectation</option>
            </select>
          </div>
          <!--     <div class="form-group" style="width:500px;">
            <label>Teamwork</label>
            <select class="form-control" v-model="teamwork">>
                <option value=""> Select</option>
                <option value="0">Does not meet expectation</option>
                <option value="1">Partially meet expectation</option>
                <option value="2">Fully meet expectation</option>
                <option value="3">Exceed expectation</option>
            </select>
        </div>
        <div class="form-group" style="width:500px;">
            <label>Leadership</label>
            <select class="form-control" v-model="leadership">
                <option value="">Select</option>
                <option value="0">Does not meet expectation</option>
                <option value="1">Partially meet expectation</option>
                <option value="2">Fully meet expectation</option>
                <option value="3">Exceed expectation</option>
            </select>
        </div>
        <div class="form-group" style="width:500px;">
            <label>Technical</label>
            <select class="form-control" v-model="technical">
                <option value="">Select</option>
                <option value="0">Does not meet expectation</option>
                <option value="1">Partially meet expectation</option>
                <option value="2">Fully meet expectation</option>
                <option value="3">Exceed expectation</option>
            </select>
        </div> -->
          <div>
            <label>Positive Feedback</label>
            <textarea
              rows="4"
              cols="119"
              v-model="positive_feedback"
              style="height:200px;"
              width="500px"
            >
            </textarea>
          </div>
          <div>
            <label>Negative Feedback</label>
            <textarea
              rows="4"
              cols="118"
              v-model="needs_improvement"
              style="height:200px;"
              width="500px"
            >
            </textarea>
          </div>
          <button class="btn btn-primary" v-on:click="submit()">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import mixin from "../mixin";
export default {
  data: function() {
    return {
      current_user: {},
      managers: [],
      employees_names: [],
      // pending_reviews: [],
      errors: [],
      manager_id: "",
      reviewee_id: "",
      relationship: "",
      judgement: "",
      // teamwork: "",
      // leadership: "",
      // technical: "",
      positive_feedback: "",
      needs_improvement: ""
    };
  },
  mixins: [mixin],
  created: function() {
    const token = localStorage.getItem("jwt");
    axios
      .get("/manager", { headers: { Authorization: `Bearer ${token}` } })
      .then(
        function(response) {
          this.managers = response.data;
        }.bind(this)
      );
    // axios
    //     .get("/pending_reviews", { headers: { "Authorization": `Bearer ${token}` } })
    //     .then(function(response) {
    //         this.pending_reviews = response.data;
    //     }.bind(this));
    axios
      .get("/current_employee", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        this.current_user = res.data;
      });
  },
  mounted: function() {
    this.hideHeader();
  },
  methods: {
    getEmployees: function() {
      const token = localStorage.getItem("jwt");
      axios
        .get("/manager/employees?manager_id=" + this.manager_id, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(
          function(response) {
            this.employees_names = response.data;
          }.bind(this)
        );
    },
    submit: function() {
      const token = localStorage.getItem("jwt");

      var params = {
        reviewer_id: this.current_user.id,
        reviewee_id: this.reviewee_id,
        relationship: this.relationship,
        judgement: this.judgement,
        // teamwork: this.teamwork,
        // technical: this.technical,
        // leadership: this.leadership,
        positive_feedback: this.positive_feedback,
        needs_improvement: this.needs_improvement
      };

      let route = "/review";

      axios
        .get("/reviews", { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
          if (
            res.data
              .map(review => review.reviewer_id)
              .indexOf(this.current_user.id) >= 0 &&
            res.data
              .map(review => review.reviewee_id)
              .indexOf(this.reviewee_id) >= 0
          ) {
            const review_id = res.data
              .filter(review => {
                return (
                  review.reviewer_id === this.current_user.id &&
                  review.reviewee_id === this.reviewee_id
                );
              })
              .map(review => review.id);

            route += "/" + review_id;
            axios
              .patch(route, params, {
                headers: { Authorization: `Bearer ${token}` }
              })
              .then(this.$router.push("/home"))
              .catch(error => {
                if (error.response.status === 401) {
                  this.$router.push("/");
                } else if (error.response.status === 422) {
                  this.errors = error.response.data.errors;
                } else {
                  this.$router.push("/");
                }
              });
          } else {
            route += "s";
            axios
              .post(route, params, {
                headers: { Authorization: `Bearer ${token}` }
              })
              .then(this.$router.push("/home"))
              .catch(error => {
                if (error.response.status === 401) {
                  this.$router.push("/");
                } else if (error.response.status === 422) {
                  this.errors = error.response.data.errors;
                } else {
                  this.$router.push("/");
                }
              });
          }
        })
        .catch(errors => {
          console.log(errors);
        });
    }
  }
};
</script>
