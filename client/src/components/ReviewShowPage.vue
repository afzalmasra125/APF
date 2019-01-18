<template id="reviews-show-page">
  <div class="vue-component">
    <div class ="container">
      <div class ="row">
        <div class = "name" v-if="employee">  

          <b>APF review for:- </b> <h3>{{employee.first_name}}  {{employee.last_name}}</h3>

          <select style="width:200px;">
            <option value="Feb">February 2019</option>
            <option value="May">May 2019</option>
            <option value="Aug">August 2019</option>
            <option value="Nov">November 2019</option>
          </select>
 
          <button  class="btn btn-primary" style="width:250px;" > <a href="#" id="test" onClick="javascript:fnExcelReport()"> <h4 class="text-white"> Download APF </h4></a> </button>

        </div>


        <table class="review" id="ratings">
          <tr>
            <th COLSPAN="8">
             <h3><br/><center>Ratings</center></h3>
            </th>
          </tr>

          <tr>
           <th>Question</th> 
           <th>Self Ratings</th>
           <th>Peer Ratings(Average)</th>
           <th>Did not meet Expectations(Peer)</th>
           <th>Partially Meets Expectations(Peer)</th>
           <th>Fully Meets Expectations(Peer)</th>
           <th>Exceeds Expectations(Peer)</th>
           <th>N/A</th>
          </tr> 

          <tr>
           <th>Judgement</th>
           <td>{{ selfReview.length ? (selfReview.judgement + 1).toFixed(1) : 'n/a'}}</td>
           <td>{{(averageJudgement).toFixed(1)}}</td>
           <td>{{ getCount(peerReviews, "judgement", 0) }}</td>
           <td>{{ getCount(peerReviews, "judgement", 1) }}</td>
           <td>{{ getCount(peerReviews, "judgement", 2) }}</td>
           <td>{{ getCount(peerReviews, "judgement", 3) }}</td>
           <td>{{ getCount(peerReviews, "judgement", null) }}</td>
          </tr> 

           <tr>
            <th>Teamwork / Collaboration</th>
            <td>{{selfReview.length ? (selfReview.teamwork + 1).toFixed(1) : 'n/a'}}</td>
            <td>{{(averageTeamwork).toFixed(1)}}</td>
            <td>{{ getCount(peerReviews, "teamwork", 0) }}</td>
            <td>{{ getCount(peerReviews, "teamwork", 1) }}</td>
            <td>{{ getCount(peerReviews, "teamwork", 2) }}</td>
            <td>{{ getCount(peerReviews, "teamwork", 3) }}</td>
            <td>{{ getCount(peerReviews, "teamwork", null) }}</td>
           </tr> 

           <tr>
            <th>Personal Leadership</th>
            <td>{{selfReview.length ? (selfReview.leadership + 1).toFixed(1) : 'n/a'}}</td>
            <td>{{(averageLeadership).toFixed(1)}}</td>
            <td>{{ getCount(peerReviews, "leadership", 0) }}</td>
            <td>{{ getCount(peerReviews, "leadership", 1) }}</td>
            <td>{{ getCount(peerReviews, "leadership", 2) }}</td>
            <td>{{ getCount(peerReviews, "leadership", 3) }}</td>
            <td>{{ getCount(peerReviews, "leadership", null) }}</td>    
           </tr> 

          <tr>
            <th>Functional / Technical</th>
            <td>{{selfReview.length ? (selfReview.technical + 1).toFixed(1) : 'n/a'}}</td>
            <td>{{(averageTechnical).toFixed(1)}}</td>
            <td>{{ getCount(peerReviews, "technical", 0) }}</td>
            <td>{{ getCount(peerReviews, "technical", 1) }}</td>
            <td>{{ getCount(peerReviews, "technical", 2) }}</td>
            <td>{{ getCount(peerReviews, "technical", 3) }}</td>
            <td>{{ getCount(peerReviews, "technical", null) }}</td>  
          </tr> 

          <tr>
            <th><b><h4>Total Average</h4></b></th>
            <td>{{ selfReview.length ? ((selfReview.judgement + selfReview.teamwork + selfReview.technical + selfReview.leadership + 4) / 4).toFixed(1) : 'n/a'}}</td>
            <td>{{((averageJudgement + averageTeamwork + averageLeadership + averageTechnical)/4).toFixed(1)}}
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr> 

        </table> 

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  template: "#reviews-show-page",
  data: function() {
    return {
      employee: null,
      selfReview: [],
      managerReview: null,
      peerReviews: null,
      averageJudgement:null,
      averageTeamwork:null,
      averageLeadership:null,
      averageTechnical:null,
      countJudgement:null,
      countTeamwork:null,
      countLeadership:null,
      countTechnical:null,
    };
  },
  created: function() {
    const token = localStorage.getItem("jwt");
    axios.get("/employees/" + this.$route.params.id, { headers: {"Authorization" : `Bearer ${token}`} })
      .then(function(response) {
        this.employee = response.data;
        this.selfReview = this.employee.reviews.filter(review => review.reviewee_id === review.reviewer_id);
        this.managerReview = this.employee.reviews.filter(review => review.reviewer_manager_status && review.reviewee_id !== review.reviewer_id)[0];
        this.peerReviews = this.employee.reviews.filter(review => !review.reviewer_manager_status && review.reviewee_id !== review.reviewer_id);
        this.averageJudgement = this.getAverage(this.peerReviews.map(review => review.judgement + 1));
        this.averageTeamwork = this.getAverage(this.peerReviews.map(review => review.teamwork + 1));
        this.averageLeadership = this.getAverage(this.peerReviews.map(review => review.leadership + 1));
        this.averageTechnical = this.getAverage(this.peerReviews.map(review => review.technical + 1));
      }.bind(this));
  },
  methods: {
    getAverage(arr) {
      return arr.reduce((a, b) => a + b, 0) / arr.length;
    },
    convertRatings(rating) {
      switch (rating) {
      case 0:
        return "Does Not Meet Expectations";
      case 1:
        return "Partially Meets Expectations";
      case 2:
        return "Fully Meets Expectations";
      case 3:
        return "Exceeds Expectations";
      }
    },
    judgementcounts(ratings, count) {},
    teamworkcounts(ratings, count) {},
    leadershipcounts(ratings, count) {},
    technicalcounts(ratings, count) {},
    getCount(arr, attribute, score) {
      return arr.filter( obj => obj[attribute] === score ).length;
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
