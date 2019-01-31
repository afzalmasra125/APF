<template id="home-page">
    <div class="vue-component">
        <div class="ascContainer">
            <div class="container">
                <div class="profileContainer">
                    <label
                        ><b><h3>Agile Performance Review</h3></b></label
                    >
                </div>
                <a
                    class="btn btn-primary btn-home"
                    v-bind:href="'/#/reviews/new'"
                    >Create Review</a
                >
                <a
                    id="manager"
                    :class="
                        'btn btn-primary btn-home ' +
                            (managerStatus ? '' : 'disabled')
                    "
                    v-bind:href="'/#/employees'"
                    >View Review</a
                >
                <a
                    id="manager"
                    :class="
                        'btn btn-primary btn-home ' +
                            (managerStatus ? '' : 'disabled')
                    "
                    v-bind:href="'/#/reviews/pending'"
                    >Pending Review</a
                >
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import mixin from "../mixin";
export default {
    data: function() {
        return {
            first_name: "",
            managerStatus: false
        };
    },
    mixins: [mixin],
    created: function() {
        const token = localStorage.getItem("jwt");
        axios
            .get("/current_employee", {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(response => {
                const employee = response.data;
                this.managerStatus = employee.manager_status;
                this.first_name = employee.first_name;
            });
    },
    mounted: function() {
        this.hideHeader();
    },
    methods: {},
    computed: {}
};
</script>
<style scoped>
.profileContainer {
    margin-top: 3%;
}
.asc-container {
    min-width: 650px;
    min-height: 350px;
    margin-left: 35%;
    top: 30%;
    position: absolute;
    background-color: #ffffff;

    box-sizing: content-box;
    box-shadow: 2px 2px #d9d9d9;
    border: solid 5px #d9d9d9;
    border-radius: 4px;
}

.btn-home {
    width: 90%;
    border-radius: 0px 0px 0px 0px;
    margin-top: 10px;
    min-height: 45px;
    margin-left: 5%;
}

.profileContainer {
    text-align: center;
    font-size: larger;
}
</style>
