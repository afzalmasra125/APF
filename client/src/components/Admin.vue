<template id="admin-page">
    <div class="vue-component">
        <Header />
        <div class="asc-container">
            <div class="container">
                <div class="profileContainer">
                    
                    <img id = "icon-search" src="../assets/icon-search.svg"/>
                    <input class = "search" placeholder="Filter by name" v-model="search" />
                    <table class="review">
                        <tbody>
                            <tr>
                                <th><h3> Employee Name </h3>
                                </th>
                                <th> <h3> Manager </h3>
                                </th>
                                 <th> <h3> Job Title </h3>
                                 </th>
                            </tr>
                            <tr v-for="employee in filteredEmployees" :key="employee.id">
                                <th><a id="employeename"  v-bind:href="'/#/updateemployee/' + employee.id">
                               <h5>{{ employee.first_name }} {{employee.last_name }}</h5>
                            </a> </th>
                            <td> <h5>{{ employee.manager.first_name}} {{ employee.manager.last_name}}</h5>  </td>
                               <td> <h5>{{ employee.job_title}}</h5>  </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import Header from './Header'
export default {
    data: function() {
        return {
            employees: [],
            search: "",
        };
    },
    components: {
        Header
    },
    created: function() {
        const token = localStorage.getItem('jwt')
        axios.get("/employees", { headers: { "Authorization": `Bearer ${token}` } }).then(
            function(response) {
                this.employees = response.data;
            }.bind(this)
        );
    },
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
<style scoped>
#icon-search
{
    min-height:35px;
}
.search 
{
 margin-top:22px;
 margin-bottom: 25px;
 font-size:25px;
 min-height:40px;
 border:none; 
}
#employeename
{
   color:black;
}
</style>