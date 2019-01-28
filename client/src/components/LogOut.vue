<template id="logout-page">
    <div class="vue-component">
        <div class="container">
            <br />
            <h1> Thank you for visiting CSG APF</h1>
            <br />
            <a v-bind:href=" '/'" class="btn btn-success float-left">Login </a>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    created: function() {
        axios.defaults.headers.common["Authorization"] = undefined;
        localStorage.removeItem("jwt");
        this.$router.push("/logout");
    }
}
</script>