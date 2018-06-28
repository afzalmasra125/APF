var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};
var ReviewShowPage = {
  template: "#reviews-show-page",
  data: function() {
    return {
      employees:[]
    };
  },
  created: function() {
    axios.get("/reviews")
      .then(function(response) {
        this.employees = response.data;
      }.bind(this));
  },
  methods: {},
  computed: {}
};

// path '/reviews/new'
var ReviewsNewPage = {
  template: "#reviews-new-page",
  data: function() {
    return {
      employees_names: [],
      reviewee_id: "",
      relationship: "",
      judgement: "",
      teamwork: "",
      leadership:"",
      technical: "",
      positive_feedback: "",
      needs_improvement: "",
      pending_reviews: [],
      errors: []
    };
  },
  created: function() {
    axios
      .get("/pending_reviews")
      .then(function(response) {
        this.pending_reviews = response.data;
      }.bind(this) );
    var params = {
      manager_id: 1
    }
    axios
      .get("/manager/employees", {params})
      .then(function(response){
        this.employees_names = response.data;
      }.bind(this) );
  },
  methods: {
    submit: function() {
      var params = {
        reviewee_id: this.reviewee_id,
        relationship: this.relationship,
        teamwork: this.teamwork,
        technical: this.technical,
        leadership: this.leadership,
        technical: this.technical,
        positive_feedback: this.positive_feedback,
        needs_improvement: this.needs_improvement
      };
      axios
        .post("/reviews", params)
        .then(function(response) {
          router.push("/reviews");
        })
        .catch(
          function(error) {
            if (error.response.status === 401){
              router.push("/reviews");
            } else if (error.response.status === 422) {
              this.errors = error.response.data.errors;
            } else {
              router.push("/");
            }
          }.bind(this)
        );
    }
  }
};


var EmployeeIndexPage = {
  template: "#employees-index-page",
  data: function() {
    return {
      employees:[]
    };
  },
  created: function() {
    axios.get("/employees")
      .then(function(response) {
        this.employees = response.data;
      }.bind(this));
  },
  methods: {},
  computed: {}
};


var Login = {
  template: "#loginpage",
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
          router.push("/home");
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

var SignupPage = {
  template: "#signup-page",
  data: function() {
    return {
      first_name: "",
      last_name: "",
      email:"",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/employees", params)
        .then(function(response) {
          router.push("/");
        })
        .catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );
    }
  }
};

var LogoutPage = {
template: "#logout-page",
  created: function() {
    axios.defaults.headers.common["Authorization"] = undefined;
    localStorage.removeItem("jwt");
    router.push("/logout");
  }
};

var ReviewsPending = {
  template: "#pending-reviews-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var router = new VueRouter({
  routes: [
    { path: "/", component: Login },
    { path: "/home", component: HomePage },
    { path: "/signup", component: SignupPage },
    { path: "/logout", component: LogoutPage },
    { path: "/employees", component: EmployeeIndexPage},
    // { path: "/reviews", component: ReviewShowPage},
    { path: "/reviews/new", component: ReviewsNewPage },
    { path: "/logout", component: LogoutPage },
    { path: "/reviews/pending", component: ReviewsPending }

    ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
var app = new Vue({
  el: "#vue-app",
  router: router
});

