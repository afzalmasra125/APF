// var ReviewIndexPage = {
//   template: "#review-index-page",
//   data: function() {
//     return {
//       review:[]
//     };
//   },
//   created: function() {
//     axios.get("/reviews")
//       .then(function(response) {
//         this.movies = response.data;
//       }.bind(this));
//   },
//   methods: {},
//   computed: {}
// };

var HomePage = {
  template: "#HomePage",
   data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        auth: { email: this.email, password: this.password }
      };
      axios
        .post("/employee_token", params)
        .then(function(response) {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          router.push("/reviews");
        })
        .catch(
          function(error) {
            this.errors = ["Invalid email or password."];
            this.email = "";
            this.password = "";
          }.bind(this)
        );
    }
  }
};

var LogoutPage = {
  created: function() {
    axios.defaults.headers.common["Authorization"] = undefined;
    localStorage.removeItem("jwt");
    router.push("/");
  }
};

var router = new VueRouter({
  routes: [
    { path: "/", component: HomePage },
    { path: "/logout", component: LogoutPage }
    // { path: "/reviews", component: ReviewIndexPage}
    ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
var app = new Vue({
  el: "#vue-app",
  router: router
});

