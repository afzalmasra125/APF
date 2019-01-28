<template id="header">
 <div class="vue-component">
          <div>
            <img src="../assets/csg-logo.png" class="loginLogo"/>
          </div>
           <div class="name">
                {{first_name}}
            </div>
            <div class="logout">
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data: function() {
        return {
            first_name: "",
        };
    },
    created: function() {
        const token = localStorage.getItem("jwt");
        axios.get("/current_employee", { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => {
                const employee = response.data
                this.first_name = employee.first_name
            })

    },
    methods: {},
    computed: {}
};
</script>
<style scoped>
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