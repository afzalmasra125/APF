<template id="update-employee-page">
    <div class="vue-component">
        <Header />
          </div>
</template>
<script>
import axios from 'axios'
import Header from './Header'
	export default {
    data: function() {
    	return {
    	employee: null,
    };
},
 components: {
        Header
    },
    created: function() {
        const token = localStorage.getItem("jwt");
        axios.get("/employees/" + this.$route.params.id, { headers: { "Authorization": `Bearer ${token}` } })
            .then(function(response){
            	 this.employee = response.data;
            	    }.bind(this));
        } 
}
</script>