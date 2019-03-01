<template id="update-employee-page">
    <div class="vue-component">
        <Header />
       <div class="asc-container">
            <div class="container">
                <div class="profileContainer">
            <h1>Update Employee</h1>
            <ul>
                <li class="text-danger" v-for="error in errors">{{ error }}</li>
            </ul>
            <div class="form-group">
                <label>First Name:</label>
                <input type="text" class="form-control" v-model="first_name">
            </div>
            <div class="form-group">
                <label>Last Name:</label>
                <input type="text" class="form-control" v-model="last_name">
            </div>
            <div class="form-group">
                <label>Job Title:</label>
                <input type="text" class="form-control" v-model="job_title">
            </div>
             <div class="form-group">
                <label>Coach:</label>
                <input type="text" class="form-control" v-model="coach">
            </div>
            <div class="form-group">
                <label>Manager Status:</label>
                <input type="text" class="form-control" v-model="manager_status">
            </div>
            <div class="form-group">
                <label>Manager Name</label>
                <input type="text" class="form-control" v-model="manager">
            </div>
             <div class="form-group">
                <label>Admin</label>
                <input type="text" class="form-control" v-model="admin_status">
            <button class="btn btn-primary" v-on:click="submit()">Submit</button>
            <button class="btn btn-secondary" v-on:click="submit()">Delete</button>
        </div>
    </div>
</div>
        </div>
    </div>
    </div>
</template>
<script>
import axios from 'axios'
import Header from './Header'
export default {
    data: function() {
        return {
            employee: null,
            errors: []
        };
    },
    components: {
        Header
    },
    created: function() {
        const token = localStorage.getItem("jwt");
        axios.get("/employees/" + this.$route.params.id, { headers: { "Authorization": `Bearer ${token}` } })
            .then(function(response) {
                this.employee = response.data;
            }.bind(this));
    },
    methods: {
        submit: function() {
            var params = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                manager_status: this.manager_status,
                coach: this.coach,
                job_title: this.job_title,
                admin_status: this.admin_status

            };
            axios
                .patch("/employee/" + this.$route.params.id, params, { headers: { "Authorization": `Bearer ${token}` } })
                .then(function(response) {
                    router.push("/employee/" + response.data.id);
                }.bind(this))
                .catch(
                    function(error) {
                        this.errors = error.response.data.errors;
                        router.push("/admin");
                    }.bind(this)
                );
        }
    }
};
</script>