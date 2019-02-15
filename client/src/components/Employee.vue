<template id="employees-index-page">
    <div class="vue-component">
        <Header />
        <div class="asc-container">
            <div class="container">
                <div class="profileContainer">
                    <h2> Employees </h2>
                    <div class ="row">
                    <div v-for="employee in filteredEmployees" :key="employee.id" class="col-md-3">
                     <div class ="card md-4">
                         <button class="card-body" v-bind:href="'/#/employees/' + employee.id"><h4>{{ employee.first_name }}</h4> <h4>{{employee.last_name }}</h4>
                            </button>
                        </div>
                    </div>
                </div>
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
            search: ""
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
<style scoped></style>