<template id="signup-page">
    <div class="main">
        <div class="vue-component">
            <div class="ascContainer">
                <div class="container">
                    <div class="signupCon">
                        <img src="../assets/csg-logo.png" class="loginLogo"/>
              </div>
                        <ul>
                            <li class="text-danger" v-for="(error, i) in errors" :key="i">{{ error }}</li>
                        </ul>
                        <div class="form-group">
                            <div class="form-group">
                                <label>First Name:</label>
                                <input type="text" class="form-control" v-model="first_name" />
                            </div>
                            <div class="form-group">
                                <label>Last Name:</label>
                                <input type="text" class="form-control" v-model="last_name" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Manager</label>
                            <select class="form-control" v-model="manager_id">
                                <option value="">Select</option>
                                <option v-for="manager in managers" :value="manager.id">
                                    {{manager.first_name}}
                                    {{manager.last_name}}
                                </option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Email:</label>
                            <input type="email" class="form-control" v-model="email" />
                        </div>
                        <div class="form-group">
                            <label>Password:</label>
                            <input type="password" class="form-control" v-model="password" />
                        </div>
                        <div class="form-group">
                            <label>Password confirmation:</label>
                            <input type="password" class="form-control" v-model="passwordConfirmation" />
                        </div>
                        <button class="btn btn-primary btn-signup" v-on:click="submit()">Create Account</button>
                        <br/>
                        <br/>
                        <a href="/#/">Sign In</a>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import axios from 'axios'
import mixin from '../mixin'
export default {
    data: function() {
        return {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            managers: [],
            manager_id: "",
            errors: []
        };
    },
    mixins: [mixin],
    created: function() {
        axios.get("/manager").then(
            function(response) {
                this.managers = response.data;
            }.bind(this));
    },
    mounted: function() {
        this.hideHeader()
    },
    methods: {
        submit() {
            const params = {
                first_name: this.first_name,
                last_name: this.last_name,
                manager_id: this.manager_id,
                email: this.email,
                password: this.password,
                password_confirmation: this.passwordConfirmation
            }
            let self = this
            axios
                .post("/employees", params)
                .then((response) => {
                    console.log(response)
                    this.$router.push("/")
                })
                .catch(
                    function(error) {
                        self.errors = error.response.data.errors
                    }
                )
        }
    }
}
</script>
<style scoped>
.ascContainer {
    min-width: 450px;
    min-height: 800px;
    margin-left: 1200px;
    top: 12%;
    position: absolute;
    background-color: #FFFFFF;
    border-radius: 16px;

}

.main {
    background-image: url("../assets/background.png");
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 1050px;
}

.signupCon {

    margin-top: 50px;

}

.loginLogo {
    max-width: 250px;
    align: right;
}

.btn-signup {
    width: 100%;
    border-radius: 0px 0px 0px 0px;
}
</style>