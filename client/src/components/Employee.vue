<template id="employees-index-page">
    <div class="vue-component">
        <Header />
        <div class="asc-container">
            <div class="container">
                <div class="profileContainer">
                    <h2> Employees </h2>
                    <img src="../assets/icon-search.svg"/>
                    <input placeholder="filter" v-model="search" />
                    <table class="table">
                        <tbody>
                            <tr v-for="employee in filteredEmployees" :key="employee.id">
                                <th> <a  v-bind:href="'/#/employees/' + employee.id"><h4>{{ employee.first_name }} {{employee.last_name }}</h4>
                            </a></th>
                                <td>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
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
        axios.get("/manager_employees", { headers: { "Authorization": `Bearer ${token}` } }).then(
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

</style>