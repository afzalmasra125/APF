<template id="employees-index-page">
  <div class="vue-component">
    <div class="container">
      <div class="card-block">
        <div
          id="container"
          style="min-width: 310px; height: 400px; margin: 0 auto"
        ></div>
        <table class="table">
          <thead>
            <input type="text" v-model="search" placeholder="Search Name..." />
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in filteredEmployees" :key="employee.id">
              <th>{{ employee.first_name }}</th>
              <th>{{ employee.last_name }}</th>
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
import Highcharts from "highcharts";
export default {
  data: function() {
    return {
      employees: [],
      search: ""
    };
  },
  created: function() {
    axios.get("/manager_employees").then(
      function(response) {
        this.employees = response.data;
      }.bind(this)
    );
  },
  mounted: function() {
    this.addChart();
  },
  methods: {
    addChart() {
      Highcharts.chart("container", {
        chart: {
          renderTo: document.getElementById("container"),
          type: "column"
        },
        title: {
          text: "Review Rating"
        },
        subtitle: {
          text: ""
        },
        xAxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: "Rating (%)"
          }
        },

        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },

        series: [
          {
            name: "Self",
            data: [4, 5, 4, 5, 3, 5, 4, 5, 4, 5, 5, 5]
          },
          {
            name: "Peer",
            data: [3, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2]
          },
          {
            name: "Manager",
            data: [1, 2, 3, 4, 3, 3, 2, 2, 3, 3, 3, 2]
          },
          {
            name: "Average",
            data: [3.2, 2.4, 2.5, 3.3, 2.3, 2.3, 1.2, 1.4, 2.6, 3.1, 2.8, 1.1]
          }
        ]
      });
    }
  },
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
