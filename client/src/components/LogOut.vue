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
import mixin from '../mixin'
export default {
    mixins: [mixin],
    created: function() {
        axios.defaults.headers.common["Authorization"] = undefined;
        localStorage.removeItem("jwt");
        this.$router.push("/logout");
    },
    mounted: function () {
        this.hideHeader()
    }
}
</script>