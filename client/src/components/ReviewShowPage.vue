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
           <br />
           <br />
          <button  class="btn btn-primary" style="width:250px;" > <a href="#" id="test" @click="fnExcelReport"> <h4 class="text-white"> Download APF </h4></a> </button>

        </div>
        </div>
        <div id="highchart"></div> 

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
           <td>{{ selfReview ? (selfReview.judgement + 1).toFixed(1) : 'n/a'}}</td>
           <td>{{averageJudgement ? (averageJudgement).toFixed(1) : 'n/a'}}</td>
           <td>{{ getCount(peerReviews, "judgement", 0) }}</td>
           <td>{{ getCount(peerReviews, "judgement", 1) }}</td>
           <td>{{ getCount(peerReviews, "judgement", 2) }}</td>
           <td>{{ getCount(peerReviews, "judgement", 3) }}</td>
           <td>{{ getCount(peerReviews, "judgement", null) }}</td>
          </tr> 

           <tr>
            <th>Teamwork / Collaboration</th>
            <td>{{selfReview ? (selfReview.teamwork + 1).toFixed(1) : 'n/a'}}</td>
            <td>{{averageTeamwork ? (averageTeamwork).toFixed(1) : 'n/a'}}</td>
            <td>{{ getCount(peerReviews, "teamwork", 0) }}</td>
            <td>{{ getCount(peerReviews, "teamwork", 1) }}</td>
            <td>{{ getCount(peerReviews, "teamwork", 2) }}</td>
            <td>{{ getCount(peerReviews, "teamwork", 3) }}</td>
            <td>{{ getCount(peerReviews, "teamwork", null) }}</td>
           </tr> 

           <tr>
            <th>Personal Leadership</th>
            <td>{{selfReview ? (selfReview.leadership + 1).toFixed(1) : 'n/a'}}</td>
            <td>{{averageLeadership ? (averageLeadership).toFixed(1) : 'n/a'}}</td>
            <td>{{ getCount(peerReviews, "leadership", 0) }}</td>
            <td>{{ getCount(peerReviews, "leadership", 1) }}</td>
            <td>{{ getCount(peerReviews, "leadership", 2) }}</td>
            <td>{{ getCount(peerReviews, "leadership", 3) }}</td>
            <td>{{ getCount(peerReviews, "leadership", null) }}</td>    
           </tr> 

          <tr>
            <th>Functional / Technical</th>
            <td>{{selfReview ? (selfReview.technical + 1).toFixed(1) : 'n/a'}}</td>
            <td>{{ averageTechnical ? (averageTechnical).toFixed(1): 'n/a'}}</td>
            <td>{{ getCount(peerReviews, "technical", 0) }}</td>
            <td>{{ getCount(peerReviews, "technical", 1) }}</td>
            <td>{{ getCount(peerReviews, "technical", 2) }}</td>
            <td>{{ getCount(peerReviews, "technical", 3) }}</td>
            <td>{{ getCount(peerReviews, "technical", null) }}</td>  
          </tr> 
          <tr>
            <th><b><h4>Total Average</h4></b></th>
            <td>{{ selfReview ? ((selfReview.judgement + selfReview.teamwork + selfReview.technical + selfReview.leadership + 4) / 4).toFixed(1) : 'n/a'}}</td>
            <td>{{((averageJudgement + averageTeamwork + averageLeadership + averageTechnical)/4).toFixed(1)}}
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr> 
          </table>
 <table class="review" id="selfReview">
  <tr>
   <th COLSPAN="2">
    <h3><br/><center>Self Review</center></h3>
     </th>
  <tr>
   <th><h3>Area of Strength</h3></th>
   <th><h3>Area of Improvement</h3></th> 
  </tr>
  <tr>
   <td>{{selfReview.positive_feedback}}</td>
   <td>{{selfReview.needs_improvement}}</td> 
  </tr>
 </table>
 <div v-if="peerReviews"> 
  <table class="review" id="peer" v-if="peerReviews">
   <tr>
     <th COLSPAN="2">
      <h3><br><center>Peer Comments </center></h3>
     </th>
    <tr>
     <th><h3>Area of Strength</h3></th>
     <th><h3>Area of Improvement</h3></th> 
    </tr>
    <tr v-for="peer in peerReviews">
     <td>{{peer.positive_feedback}}</td>
     <td>{{peer.needs_improvement}}</td> 
    </tr>
  </table>
</div> 
 <table v-if="managerReview" class="review" id="manager" >
  <tr>
    <th COLSPAN="3">
      <h3><br><center> Manager Summary </center></h3>
    </th>
  <tr >
   <td><b>Judegment</b></td> 
  <td>{{convertRatings(managerReview.judgement)}}</td>
  <td rowspan="4">{{managerReview.positive_feedback}}</td>
  </tr>
 <tr>
 <td><b>Teamwork/Collaboration</b></td>
  <td>{{convertRatings(managerReview.teamwork)}}</td>
 </tr>
<tr>
 <td><b>Personal Leadership</b></td>
 <td>{{convertRatings(managerReview.leadership)}}</td>
  </tr>
  <tr>
    <td><b>Functional/Technical</b></td>
    <td>{{convertRatings(managerReview.technical)}}</td>
  </tr>
   </table>
  </div> 
   </div>
  </div>
</template>
       
<script>
import axios from 'axios'
import $ from 'jquery'
import Highcharts from 'highcharts'

export default {
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
      ChartedEmployees:[],
      search: "",
    };
  },
  created: function() {
    const token = localStorage.getItem("jwt");
    axios.get("/employees/" + this.$route.params.id, { headers: {"Authorization" : `Bearer ${token}`} })
      .then(function(response) {
        this.employee = response.data;
        this.selfReview = this.employee.reviews.filter(review => review.reviewee_id === review.reviewer_id)[0];
        this.managerReview = this.employee.reviews.filter(review => review.reviewer_manager_status && review.reviewee_id !== review.reviewer_id)[0];
        this.peerReviews = this.employee.reviews.filter(review => !review.reviewer_manager_status && review.reviewee_id !== review.reviewer_id);
        this.averageJudgement = this.getAverage(this.peerReviews.map(review => review.judgement + 1));
        this.averageTeamwork = this.getAverage(this.peerReviews.map(review => review.teamwork + 1));
        this.averageLeadership = this.getAverage(this.peerReviews.map(review => review.leadership + 1));
        this.averageTechnical = this.getAverage(this.peerReviews.map(review => review.technical + 1));
      }.bind(this));

      axios.get("/employees")
      .then(function(response) {
        this.ChartedEmployees = response.data;
      }.bind(this));
  },

  mounted: function () {
    this.addChart()
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
      if (!arr) {return}
      return arr.filter( obj => obj[attribute] === score ).length;
    },
    fnExcelReport () {
      var tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
      tab_text = tab_text + '<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>';

      tab_text = tab_text + '<x:Name>Test Sheet</x:Name>';

      tab_text = tab_text + '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>';
      tab_text = tab_text + '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>';

      tab_text = tab_text + "<table border='1px'>";   
      tab_text = tab_text + $('#ratings').html();
      tab_text = tab_text + $('#selfReview').html();
      tab_text = tab_text + $('#peer').html();
      tab_text = tab_text + $('#manager').html();

      console.log(tab_text);
      tab_text = tab_text + '</table></body></html>';

      var data_type = 'data:application/vnd.ms-excel';
      
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE ");
      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        if (window.navigator.msSaveBlob) {
            var blob = new Blob([tab_text], {
                type: "application/csv;charset=utf-8;"
            });
            navigator.msSaveBlob(blob, 'APF_2019.xlsx');
        }
      } else {
        $('#test').attr('href', data_type + ', ' + encodeURIComponent(tab_text));
        $('#test').attr('download', 'APF_2019.xls');
      }
    },

    addChart () {
      Highcharts.chart('highchart', {
          chart: {
              // renderTo: document.getElementById("highchart"),
              type: 'column'
          },
          title: {
              text: 'Review Rating'
          },
          subtitle: {
              text: ''
          },
          xAxis: {
              categories: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec'
              ],
              crosshair: true
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Rating (%)'
              }
          },
  
          plotOptions: {
              column: {
                  pointPadding: 0.2,
                  borderWidth: 0
              }
          },
          
          series: [{
              name: 'Self',
              data: [4, 5, 4, 5, 3, 5, 4, 5, 4, 5, 5, 5]

          }, {
              name: 'Peer',
              data: [3, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2]

          }, {
              name: 'Manager',
              data: [ 1, 2, 3, 4, 3, 3, 2, 2, 3, 3, 3, 2]

          }, {
              name: 'Average',
              data: [ 3.2, 2.4, 2.5, 3.3, 2.3, 2.3, 1.2, 1.4, 2.6, 3.1, 2.8, 1.1]

          }]
      });
    }

  },

  computed: {
      filteredEmployees: function() {
      let employees = [];
      for (var i = this.ChartedEmployees.length - 1; i >= 0; i--) {
        const firstName = this.ChartedEmployees[i].first_name || '';
        const lastName = this.ChartedEmployees[i].last_name || '';
        const fullName = firstName + lastName;
        if (fullName.toLowerCase().includes(this.search.toLowerCase())) {
          employees.push(this.ChartedEmployees[i]);
        }
      }
      return employees; 
    }
  }
}
</script>


<style>
.review {
  margin-top:10px;
  margin-bottom:50px;
  width:100%; 
  border: 5px solid red;
  border-style: solid;
  padding: 10px;
}
table{
  margin-top:50px;
  border: 5px black
}

tr
{
  border: 1px black;
  border-style: solid;
  padding: 10px;
}
th
{
  border: 1px black;
  border-style: solid;
  padding: 10px;
}
td
{
  border: 1px black;
  border-style: solid;
  padding: 10px;
  margin: 0px;
}
</style>


<!-- <script>
import axios from 'axios'
import Highcharts from 'highcharts'
export default {
  data: function() {
    return {
      employees:[],
      search: "",
    };
  },
  created: function() {
    axios.get("/employees")
      .then(function(response) {
        this.employees = response.data;
      }.bind(this));
  },
  mounted: function () {
    this.addChart()
  },
  methods: {
    addChart () {
      Highcharts.chart('container', {
          chart: {
              renderTo: document.getElementById("container"),
              type: 'column'
          },
          title: {
              text: 'Review Rating'
          },
          subtitle: {
              text: ''
          },
          xAxis: {
              categories: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec'
              ],
              crosshair: true
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Rating (%)'
              }
          },
  
          plotOptions: {
              column: {
                  pointPadding: 0.2,
                  borderWidth: 0
              }
          },
          
          series: [{
              name: 'Self',
              data: [4, 5, 4, 5, 3, 5, 4, 5, 4, 5, 5, 5]

          }, {
              name: 'Peer',
              data: [3, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2]

          }, {
              name: 'Manager',
              data: [ 1, 2, 3, 4, 3, 3, 2, 2, 3, 3, 3, 2]

          }, {
              name: 'Average',
              data: [ 3.2, 2.4, 2.5, 3.3, 2.3, 2.3, 1.2, 1.4, 2.6, 3.1, 2.8, 1.1]

          }]
      });
    }
  },
  computed: { 
    filteredEmployees: function() {
      let employees = [];
      for (var i = this.employees.length - 1; i >= 0; i--) {
        const firstName = this.employees[i].first_name || '';
        const lastName = this.employees[i].last_name || '';
        const fullName = firstName + lastName;
        if (fullName.toLowerCase().includes(this.search.toLowerCase())) {
          employees.push(this.employees[i]);
        }
      }
      return employees; 
    }
  }
};
</script> -->



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>