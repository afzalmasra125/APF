var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      employees:[]
    };
  },
  created: function() {
    axios
      .get("/currentuser")
      .then(function(response) {
        this.employees = response.data;
      }.bind(this) );
  },
  methods: {},
  computed: {}
};
var ReviewShowPage = {
  template: "#reviews-show-page",
  data: function() {
    return {
      employee: null,
      selfReview: [],
      managerReview: null,
      peerReviews: null,
      averageJudgement:null,
      averageTeamwork:null,
      averageLeadership:null,
      averageTechnical:null,
      countJudgement:null,
      countTeamwork:null,
      countLeadership:null,
      countTechnical:null,
    };
  },
  created: function() {
    const token = localStorage.getItem("jwt");
    axios.get("/employees/" + this.$route.params.id, { headers: {"Authorization" : `Bearer ${token}`} })
      .then(function(response) {
        this.employee = response.data;
        this.selfReview = this.employee.reviews.filter(review => review.reviewee_id === review.reviewer_id)[0];
        this.managerReview = this.employee.reviews.filter(review => review.reviewer_manager_status && review.reviewee_id !== review.reviewer_id)[0];
        this.peerReviews = this.employee.reviews.filter(review => !review.reviewer_manager_status && review.reviewee_id !== review.reviewer_id);
        this.averageJudgement = this.getAverage(this.peerReviews.map(review => review.judgement + 1));
        this.averageTeamwork = this.getAverage(this.peerReviews.map(review => review.teamwork + 1));
        this.averageLeadership = this.getAverage(this.peerReviews.map(review => review.leadership + 1));
        this.averageTechnical = this.getAverage(this.peerReviews.map(review => review.technical + 1));
      }.bind(this));
  },
  methods: {
    getAverage(arr) {
      return arr.reduce((a, b) => a + b, 0) / arr.length;
    },
    convertRatings(rating) {
      switch (rating) {
      case 0:
        return "Does Not Meet Expectations";
      case 1:
        return "Partially Meets Expectations";
      case 2:
        return "Fully Meets Expectations";
      case 3:
        return "Exceeds Expectations";
      }
    },
    judgementcounts(ratings, count) {},
    teamworkcounts(ratings, count) {},
    leadershipcounts(ratings, count) {},
    technicalcounts(ratings, count) {},
    getCount(arr, attribute, score) {
      return arr.filter( obj => obj[attribute] === score ).length;
    }
  },
  computed: {
  }
};
var ReviewsNewPage = {
  template: "#reviews-new-page",
  data: function() {
    return {
      managers: [],
      employees_names: [],
      pending_reviews: [],
      errors: [],
      manager_id:"",
      reviewee_id: "",
      relationship: "",
      judgement: "",
      teamwork: "",
      leadership:"",
      technical: "",
      positive_feedback: "",
      needs_improvement: "",
    };
  },
  created: function() {
    axios
    .get("/manager")
      .then(function(response) {
        this.managers = response.data;
      }.bind(this) );
    axios
      .get("/pending_reviews")
      .then(function(response) {
        this.pending_reviews = response.data;
      }.bind(this) );
  },
  methods: {
    getEmployees: function() {
      console.log('hi')
      axios
        .get("/manager/employees?manager_id=" + this.manager_id)
        .then(function(response) {
          this.employees_names = response.data;
        }.bind(this) );
    },
    submit: function() {
      var params = {
        reviewee_id: this.reviewee_id,
        relationship: this.relationship,
        teamwork: this.teamwork,
        technical: this.technical,
        leadership: this.leadership,
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
      employees:[],
      search: "",
    };
  },
  created: function() {
    axios.get("/employees")
      .then(function(response) {
        this.employees = response.data;
      }.bind(this));
  },
  methods: {},
  computed: { 
    filteredEmployees: function() {
      let employees = [];
      for (var i = this.employees.length - 1; i >= 0; i--) {
        const firstName = this.employees[i].first_name || '';
        const lastName = this.employees[i].last_name || '';
        const fullName = firstName + lastName;
        if (fullName.toLowerCase().includes(this.search.toLowerCase())) {
          employees.push(this.employees[i]);
        }
      }
      return employees; 
    }
  }
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
    { path: "/employees/:id", component: ReviewShowPage},
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