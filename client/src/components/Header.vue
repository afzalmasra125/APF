<template id="header">
    <div class="vue-component">
        <!-- <div class="header-container">
            <div>
                <img src="../assets/csg-logo.png" class="loginLogo" />
            </div>
            <div class="name">
                {{ first_name }}
            </div>
            <div class="logout">
                <a v-bind:href="'/#/logout'">LOG OUT</a>
            </div>
            <div>
                <hr
                    class="menu"
                    align="left"
                    width="100%"
                    solid="15px"
                    color="#d9d9d9"
                />
            </div>
        </div> -->
        <nav
            class="navbar navbar-expand-lg navbar-light bg-transparent border-bottom"
        >
            <a class="navbar-brand" href="#">
                <img
                    src="../assets/csg-logo.png"
                    class="img-fluid"
                    width="175px"
                />
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div
                v-if="first_name"
                class="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <div class="navbar-nav ml-auto">
                    <div class="nav-link disabled h5 text-dark">
                        {{ first_name }}
                    </div>
                    <div class="nav-link h5">
                        <a href="/#/logout" class="text-secondary">Log Out</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data: function() {
        return {
            first_name: ""
        };
    },
    created: function() {
        const token = localStorage.getItem("jwt");
        axios
            .get("/current_employee", {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(response => {
                const employee = response.data;
                this.first_name = employee.first_name;
            });
    },
    methods: {},
    computed: {}
};
</script>
<!-- <style scoped>
.name {
    right: 6.7%;
    top: 2.5%;
    font-size: 24px;
    position: absolute;
}

.logout {
    right: 1.4%;
    top: 3.1%;
    font-size: 18px;
    position: absolute;
}

.menu {
    max-width: 100%;
    max-height: 5%;
    top: 7%;
    position: absolute;
}

.loginLogo {
    max-width: 175px;
    top: 2%;
    align: right;
    position: absolute;
}
</style>
 -->
