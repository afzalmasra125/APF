(function(e){function t(t){for(var r,i,o=t[0],l=t[1],c=t[2],m=0,d=[];m<o.length;m++)i=o[m],n[i]&&d.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},s=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"19cc":function(e,t,a){},"27dc":function(e,t,a){e.exports=a.p+"img/csg-logo.41790ffb.png"},"2d61":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view")],1)},s=[],i=a("8c4f"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("div",{staticClass:"vue-component"},[a("div",{staticClass:"ascContainer"},[a("div",{staticClass:"container"},[e._m(0),a("ul",e._l(e.errors,function(t,r){return a("li",{key:r,staticClass:"text-danger"},[e._v(e._s(t))])}),0),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-group"},[a("label",[e._v("First Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.first_name,expression:"first_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.first_name},on:{input:function(t){t.target.composing||(e.first_name=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[e._v("Last Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.last_name,expression:"last_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.last_name},on:{input:function(t){t.target.composing||(e.last_name=t.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("label",[e._v("Manager")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.manager_id,expression:"manager_id"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.manager_id=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v("Select")]),e._l(e.managers,function(t){return a("option",{domProps:{value:t.id}},[e._v("\n                                "+e._s(t.first_name)+"\n                                "+e._s(t.last_name)+"\n                            ")])})],2)]),a("div",{staticClass:"form-group"},[a("label",[e._v("Email:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[e._v("Password:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[e._v("Password confirmation:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordConfirmation,expression:"passwordConfirmation"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.passwordConfirmation},on:{input:function(t){t.target.composing||(e.passwordConfirmation=t.target.value)}}})]),a("button",{staticClass:"btn btn-primary btn-signup",on:{click:function(t){e.submit()}}},[e._v("Create Account")]),a("br"),a("br"),a("a",{attrs:{href:"/#/"}},[e._v("Sign In")])])])])])},l=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"signupCon"},[r("img",{staticClass:"loginLogo",attrs:{src:a("27dc")}})])}],c=a("bc3a"),u=a.n(c),m=(a("6762"),{methods:{hideHeader:function(){var e=document.querySelector(".header-container"),t=["/logout","/","/signup"];t.includes(this.$route.path)?e.style.display="none":e.style.display="block"}}}),d={data:function(){return{first_name:"",last_name:"",email:"",password:"",passwordConfirmation:"",managers:[],manager_id:"",errors:[]}},mixins:[m],created:function(){u.a.get("/manager").then(function(e){this.managers=e.data}.bind(this))},mounted:function(){this.hideHeader()},methods:{submit:function(){var e=this,t={first_name:this.first_name,last_name:this.last_name,manager_id:this.manager_id,email:this.email,password:this.password,password_confirmation:this.passwordConfirmation},a=this;u.a.post("/employees",t).then(function(t){console.log(t),e.$router.push("/")}).catch(function(e){a.errors=e.response.data.errors})}}},v=d,p=(a("7008"),a("2877")),h=Object(p["a"])(v,o,l,!1,null,"ecf9931e",null),f=h.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("div",{staticClass:"vue-component"},[a("div",{staticClass:"ascContainer"},[a("div",{staticClass:"container"},[e._m(0),a("ul",e._l(e.errors,function(t,r){return a("li",{key:r,staticClass:"text-danger"},[e._v(e._s(t))])}),0),a("div",{staticClass:"form-group"},[a("label",[e._v("Email:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[e._v("Password:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("button",{staticClass:"btn btn-primary btn-login",on:{click:function(t){e.submit()}}},[e._v("Submit")]),a("br"),a("br"),a("a",{attrs:{href:"#",target:"_blank"}},[e._v("Forgot your password?")]),a("br"),a("br"),a("a",{attrs:{href:"/#/signup"}},[e._v("Create an account")])])])])])},g=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loginLogoCon"},[r("img",{staticClass:"loginLogo",attrs:{src:a("27dc")}})])}],w={data:function(){return{email:"",password:"",errors:[]}},mixins:[m],mounted:function(){this.hideHeader()},methods:{submit:function(){var e=this,t={auth:{email:this.email,password:this.password}},a=this;u.a.post("/employee_token",t).then(function(t){u.a.defaults.headers.common["Authorization"]="Bearer "+t.data.jwt,localStorage.setItem("jwt",t.data.jwt),e.$router.push("/home")}).catch(function(){a.errors=["Invalid email or password."],a.email="",a.password=""})}}},b=w,y=(a("747f"),Object(p["a"])(b,_,g,!1,null,"ccb9b258",null)),C=y.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vue-component"},[a("div",{staticClass:"container"},[a("br"),a("h1",[e._v(" Thank you for visiting CSG APF")]),a("br"),a("a",{staticClass:"btn btn-success float-left",attrs:{href:"/"}},[e._v("Login ")])])])},E=[],A={mixins:[m],created:function(){u.a.defaults.headers.common["Authorization"]=void 0,localStorage.removeItem("jwt"),this.$router.push("/logout")},mounted:function(){this.hideHeader()}},S=A,k=Object(p["a"])(S,x,E,!1,null,null,null),R=k.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vue-component"},[a("div",{staticClass:"asc-container"},[a("div",{staticClass:"container"},[e._m(0),a("a",{staticClass:"btn btn-primary btn-home",attrs:{href:"/#/reviews/new"}},[e._v("Create Review")]),a("a",{class:"btn btn-primary btn-home "+(e.managerStatus?"":"disabled"),attrs:{id:"manager",href:"/#/employees"}},[e._v("View Review")]),a("a",{class:"btn btn-primary btn-home "+(e.managerStatus?"":"disabled"),attrs:{id:"manager",href:"/#/reviews/pending"}},[e._v("Pending Review")])])])])},j=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"profileContainer"},[a("label",[a("b",[a("h3",[e._v("Agile Performance Review")])])])])}],N={data:function(){return{first_name:"",managerStatus:!1}},mixins:[m],created:function(){var e=this,t=localStorage.getItem("jwt");u.a.get("/current_employee",{headers:{Authorization:"Bearer ".concat(t)}}).then(function(t){var a=t.data;e.managerStatus=a.manager_status,e.first_name=a.first_name})},mounted:function(){this.hideHeader()},methods:{},computed:{}},O=N,$=(a("58b3"),Object(p["a"])(O,P,j,!1,null,"5c2e5e58",null)),I=$.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vue-component"},[a("div",{staticClass:"asc-container"},[a("div",{staticClass:"container"},[a("div",{staticClass:"profileContainer"},[a("div",{staticClass:"card-block"},[a("div"),a("table",{staticClass:"table"},[a("thead",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",placeholder:"Search Name..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._m(0)]),a("tbody",e._l(e.filteredEmployees,function(t){return a("tr",{key:t.id},[a("th",[e._v(e._s(t.first_name)+" "+e._s(t.last_name))]),a("td",[a("a",{staticClass:"btn btn-primary",attrs:{href:"/#/employees/"+t.id}},[e._v("Reviews")])])])}),0)])])])])])])},F=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("th",[e._v("First Name")]),a("th")])}],L=(a("386d"),a("2fdb"),{data:function(){return{employees:[],search:""}},mixins:[m],created:function(){var e=localStorage.getItem("jwt");u.a.get("/manager_employees",{headers:{Authorization:"Bearer ".concat(e)}}).then(function(e){this.employees=e.data}.bind(this))},mounted:function(){this.hideHeader()},methods:{},computed:{filteredEmployees:function(){for(var e=[],t=this.employees.length-1;t>=0;t--){var a=this.employees[t].first_name||"",r=this.employees[t].last_name||"",n=a+r;n.toLowerCase().includes(this.search.toLowerCase())&&e.push(this.employees[t])}return e}}}),B=L,z=Object(p["a"])(B,M,F,!1,null,"8f5e3004",null),U=z.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vue-component"},[a("div",{staticClass:"asc-container"},[a("div",{staticClass:"container"},[a("div",{staticClass:"profileContainer"},[a("div",{staticClass:"container mt-5"},[a("h2",[e._v("Pending Reviews")]),a("h3",[e._v("\n                        Manager: "+e._s(e.currentUser.first_name)+"\n                        "+e._s(e.currentUser.last_name)+"\n                    ")]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"h3"},[e._v("Employee")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedEmployee,expression:"selectedEmployee"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedEmployee=t.target.multiple?a:a[0]}}},[a("option",{domProps:{value:{}}},[e._v("Select")]),e._l(e.managedEmployees,function(t){return a("option",{key:t.id,domProps:{value:t}},[e._v("\n                                "+e._s(t.first_name)+"\n                                "+e._s(t.last_name)+"\n                            ")])})],2)])])])]),a("div",{staticClass:"container"},[a("div",{staticClass:"card px-2"},[a("h3",{},[e._v("Send Review Request")]),0!==Object.keys(e.selectedEmployee).length?a("table",{staticClass:"table table-striped"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[e._v("#")]),e._l(e.employees,function(t){return a("th",{key:t.id},[e._v("\n                                "+e._s(t.first_name)+"\n                                "+e._s(t.last_name)+"\n                            ")])})],2)]),a("tbody",[a("tr",[a("th",{attrs:{scope:"row"}},[e._v("\n                                "+e._s(e.selectedEmployee.first_name)+"\n                                "+e._s(e.selectedEmployee.last_name)+"\n                            ")]),e._l(e.employees,function(t){return a("td",{key:t.id},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedEmployees,expression:"checkedEmployees"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{value:[e.selectedEmployee.id,t.id],checked:Array.isArray(e.checkedEmployees)?e._i(e.checkedEmployees,[e.selectedEmployee.id,t.id])>-1:e.checkedEmployees},on:{change:function(a){var r=e.checkedEmployees,n=a.target,s=!!n.checked;if(Array.isArray(r)){var i=[e.selectedEmployee.id,t.id],o=e._i(r,i);n.checked?o<0&&(e.checkedEmployees=r.concat([i])):o>-1&&(e.checkedEmployees=r.slice(0,o).concat(r.slice(o+1)))}else e.checkedEmployees=s}}})])])})],2)])]):e._e()])]),a("button",{staticClass:"btn btn-primary my-3",on:{click:function(t){e.submit()}}},[e._v("\n            Send Request\n        ")])])])},q=[],W={data:function(){return{currentUser:{},reviews:[],employees:[],review:{reviewer_id:"",reviewee_id:"",relationship:"",judgement:"",leadership:"",technical:"",positive_feedback:"",needs_improvement:""},selectedEmployee:{},reviewedEmployeeIds:[],unreviewedEmployees:[],checkedEmployees:[]}},created:function(){var e=this,t=localStorage.getItem("jwt");u.a.defaults.headers.common["Authorization"]="Bearer "+t,u.a.get("/pending_reviews").then(function(e){this.reviews=e.data}.bind(this)),u.a.get("/employees").then(function(e){this.employees=e.data}.bind(this)),u.a.get("/current_employee").then(function(t){e.currentUser=t.data})},methods:{submit:function(){var e=this;u()({method:"post",url:"/email/send",data:{checkedEmployees:this.checkedEmployees}}).then(function(t){e.$router.push("/home")})},sortUnreviewedEmployees:function(e){this.unreviewedEmployees=this.employees.filter(function(e){return this.indexOf(e.id)<0},e)},reviewed:function(e){return!(this.unreviewedEmployees.map(function(e){return e.id}).indexOf(e)>=0)}},computed:{managedEmployees:function(){var e=this;return this.currentUser.id?this.employees.filter(function(t){return e.currentUser.id===t.manager_id}):[]},reviewedEmployees:function(){var e=this,t=this.reviews.filter(function(t){return e.selectedEmployee.id===t.reviewer_id}).map(function(e){return e.reviewee});return this.sortUnreviewedEmployees(t.map(function(e){return e.id})),t}}},J=W,T=Object(p["a"])(J,H,q,!1,null,null,null),D=T.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vue-component"},[a("div",{staticClass:"asc-container"},[a("div",{staticClass:"container"},[a("div",{staticClass:"profileContainer"},[a("h2",[e._v("Review")]),a("ul",e._l(e.errors,function(t){return a("li",{staticClass:"text-danger"},[e._v(e._s(t))])}),0),a("div",{staticClass:"form-group",staticStyle:{width:"500px"}},[a("label",[e._v("Manager")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.manager_id,expression:"manager_id"}],staticClass:"form-control",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.manager_id=t.target.multiple?a:a[0]},e.getEmployees]}},[a("option",{attrs:{value:""}},[e._v("Select")]),e._l(e.managers,function(t){return a("option",{domProps:{value:t.id}},[e._v("\n                            "+e._s(t.first_name)+"\n                            "+e._s(t.last_name)+"\n                        ")])})],2)]),a("br"),a("div",{staticClass:"form-group",staticStyle:{width:"500px"}},[a("label",[e._v("Employee Name in my group")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.reviewee_id,expression:"reviewee_id"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.reviewee_id=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v("Select")]),e._l(e.employees_names,function(t){return a("option",{domProps:{value:t.id}},[e._v("\n                            "+e._s(t.first_name)+"\n                            "+e._s(t.last_name)+"\n                        ")])})],2)]),a("br"),a("div",{staticClass:"form-group",staticStyle:{width:"500px"}},[a("label",[e._v("Relationship")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.relationship,expression:"relationship"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.relationship=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v("Select")]),a("option",{attrs:{value:"0"}},[e._v("Peer")]),a("option",{attrs:{value:"1"}},[e._v("Self")])])]),a("div",{staticClass:"form-group",staticStyle:{width:"500px"}},[a("label",[e._v("Overall")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.judgement,expression:"judgement"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.judgement=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v("Select")]),a("option",{attrs:{value:"0"}},[e._v("Does not meet expectation")]),a("option",{attrs:{value:"1"}},[e._v("Partially meet expectation")]),a("option",{attrs:{value:"2"}},[e._v("Fully meet expectation")]),a("option",{attrs:{value:"3"}},[e._v("Exceed expectation")])])]),a("div",[a("label",[e._v("Positive Feedback")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.positive_feedback,expression:"positive_feedback"}],staticStyle:{height:"200px"},attrs:{rows:"4",cols:"119",width:"500px"},domProps:{value:e.positive_feedback},on:{input:function(t){t.target.composing||(e.positive_feedback=t.target.value)}}})]),a("div",[a("label",[e._v("Negative Feedback")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.needs_improvement,expression:"needs_improvement"}],staticStyle:{height:"200px"},attrs:{rows:"4",cols:"118",width:"500px"},domProps:{value:e.needs_improvement},on:{input:function(t){t.target.composing||(e.needs_improvement=t.target.value)}}})]),a("button",{staticClass:"btn btn-primary",on:{click:function(t){e.submit()}}},[e._v("Submit")])])])])])},Q=[],V={data:function(){return{managers:[],employees_names:[],errors:[],manager_id:"",reviewee_id:"",relationship:"",judgement:"",positive_feedback:"",needs_improvement:""}},mixins:[m],created:function(){var e=localStorage.getItem("jwt");u.a.get("/manager",{headers:{Authorization:"Bearer ".concat(e)}}).then(function(e){this.managers=e.data}.bind(this))},mounted:function(){this.hideHeader()},methods:{getEmployees:function(){var e=localStorage.getItem("jwt");u.a.get("/manager/employees?manager_id="+this.manager_id,{headers:{Authorization:"Bearer ".concat(e)}}).then(function(e){this.employees_names=e.data}.bind(this))},submit:function(){var e=this,t={reviewee_id:this.reviewee_id,relationship:this.relationship,judgement:this.judgement,positive_feedback:this.positive_feedback,needs_improvement:this.needs_improvement},a=localStorage.getItem("jwt");u.a.post("/reviews",t,{headers:{Authorization:"Bearer ".concat(a)}}).then(function(t){e.$router.push("/home")}).catch(function(t){401===t.response.status?e.$router.push("/"):422===t.response.status?e.errors=t.response.data.errors:e.$router.push("/")})}}},K=V,X=Object(p["a"])(K,G,Q,!1,null,null,null),Y=X.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vue-component"},[a("div",{staticClass:"asc-container"},[a("div",{staticClass:"container"},[a("div",{staticClass:"profileContainer"},[a("div",{staticClass:"row"},[e.employee?a("div",{staticClass:"name"},[a("b",[e._v("Agile Perfomance review for:- ")]),a("h3",[e._v(e._s(e.employee.first_name)+"  "+e._s(e.employee.last_name))]),e._m(0),a("br"),a("br"),a("button",{staticClass:"btn btn-primary",staticStyle:{width:"250px"}},[a("a",{attrs:{href:"#",id:"test"},on:{click:e.fnExcelReport}},[a("h4",{staticClass:"text-white"},[e._v(" Download APF ")])])])]):e._e()]),a("div",{attrs:{id:"highchart"}}),a("table",{staticClass:"review",attrs:{id:"ratings"}},[a("tr",[a("th",{attrs:{COLSPAN:"8"}},[a("h3",[a("br"),a("center",[e._v("Ratings")])],1)])]),e._m(1),a("tr",[a("th",[e._v("Overall Compentencies Rating")]),a("td",[e._v(e._s(e.selfReview?(e.selfReview.judgement+1).toFixed(1):"n/a"))]),a("td",[e._v(e._s(e.averageJudgement?e.averageJudgement.toFixed(1):"n/a"))]),a("td",[e._v(e._s(e.getCount(e.peerReviews,"judgement",0)))]),a("td",[e._v(e._s(e.getCount(e.peerReviews,"judgement",1)))]),a("td",[e._v(e._s(e.getCount(e.peerReviews,"judgement",2)))]),a("td",[e._v(e._s(e.getCount(e.peerReviews,"judgement",3)))]),a("td",[e._v(e._s(e.getCount(e.peerReviews,"judgement",null)))])])]),e.selfReview?a("table",{staticClass:"review",attrs:{id:"selfReview"}},[a("tr",[a("th",{attrs:{COLSPAN:"2"}},[a("h3",[a("br"),a("center",[e._v("Self Review")])],1)])]),e._m(2),a("tr",[a("td",[e._v(e._s(e.selfReview.positive_feedback))]),a("td",[e._v(e._s(e.selfReview.needs_improvement))])])]):a("table",{staticClass:"review",attrs:{id:"selfReview"}},[a("tr",[a("th",{attrs:{COLSPAN:"2"}},[a("h3",[a("br"),a("center",[e._v("Self Review")])],1)])]),e._m(3),e._m(4)]),0!=e.peerReviews?a("table",{staticClass:"review",attrs:{id:"peer"}},[a("tr",[a("th",{attrs:{COLSPAN:"2"}},[a("h3",[a("br"),a("center",[e._v("Peer Comments ")])],1)])]),e._m(5),e._l(e.peerReviews,function(t){return e.peerReviews?a("tr",[a("td",[e._v(e._s(t.positive_feedback))]),a("td",[e._v(e._s(t.needs_improvement))])]):e._e()})],2):a("table",{staticClass:"review",attrs:{id:"peer"}},[a("tr",[a("th",{attrs:{COLSPAN:"2"}},[a("h3",[a("br"),a("center",[e._v("Peer Comments ")])],1)])]),e._m(6),e._m(7)]),e.managerReview?a("table",{staticClass:"review",attrs:{id:"manager"}},[a("tr",[a("th",{attrs:{COLSPAN:"3"}},[a("h3",[a("br"),a("center",[e._v(" Manager Summary ")])],1)])]),a("tr",[e._m(8),a("td",[e._v(e._s(e.convertRatings(e.managerReview.judgement)))]),a("td",{attrs:{rowspan:"4"}},[e._v(e._s(e.managerReview.positive_feedback))])])]):a("table",{staticClass:"review",attrs:{id:"manager"}},[a("tr",[a("th",{attrs:{COLSPAN:"3"}},[a("h3",[a("br"),a("center",[e._v(" Manager Summary ")])],1)])]),e._m(9)])])])])])},ee=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("select",{staticStyle:{width:"200px"}},[a("option",{attrs:{value:"Feb"}},[e._v("February 2019")]),a("option",{attrs:{value:"May"}},[e._v("May 2019")]),a("option",{attrs:{value:"Aug"}},[e._v("August 2019")]),a("option",{attrs:{value:"Nov"}},[e._v("November 2019")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("th",[e._v("Question")]),a("th",[e._v("Self Ratings")]),a("th",[e._v("Peer Ratings(Average)")]),a("th",[e._v("Did not meet Expectations(Peer)")]),a("th",[e._v("Partially Meets Expectations(Peer)")]),a("th",[e._v("Fully Meets Expectations(Peer)")]),a("th",[e._v("Exceeds Expectations(Peer)")]),a("th",[e._v("N/A")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("th",[a("h3",[e._v("Area of Strength")])]),a("th",[a("h3",[e._v("Area of Improvement")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("th",[a("h3",[e._v("Area of Strength")])]),a("th",[a("h3",[e._v("Area of Improvement")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("td",[e._v(" Not Available ")]),a("td",[e._v(" Not Available ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("th",[a("h3",[e._v("Area of Strength")])]),a("th",[a("h3",[e._v("Area of Improvement")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("th",[a("h3",[e._v("Area of Strength")])]),a("th",[a("h3",[e._v("Area of Improvement")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("td",[e._v("Not Available")]),a("td",[e._v("Available")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("td",[a("b",[e._v("Overall Rating")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("td",[a("b",[e._v("Overall Rating")])]),a("td",[e._v("Not Available ")]),a("td",{attrs:{rowspan:"4"}},[e._v("Not Available")])])}],te=(a("4917"),a("7514"),a("1157")),ae=a.n(te),re=a("ea7f"),ne=a.n(re),se={data:function(){return{employee:null,selfReview:[],managerReview:null,peerReviews:null,averageJudgement:0,countJudgement:null,ChartedEmployees:[],search:""}},mixins:[m],created:function(){var e=localStorage.getItem("jwt");u.a.get("/employees/"+this.$route.params.id,{headers:{Authorization:"Bearer ".concat(e)}}).then(function(e){var t=this;this.employee=e.data,this.selfReview=this.employee.reviews.filter(function(e){return e.reviewee_id===e.reviewer_id})[0],this.managerReview=this.employee.reviews.find(function(e){return e.reviewer_manager_status&&t.employee.manager_id===e.reviewer_id}),this.peerReviews=this.employee.reviews.filter(function(e){return e.reviewee_id!==e.reviewer_id&&t.employee.manager_id!==e.reviewer_id}),this.averageJudgement=this.getAverage(this.peerReviews.map(function(e){return e.judgement+1})),this.addChart()}.bind(this)),u.a.get("/employees",{headers:{Authorization:"Bearer ".concat(e)}}).then(function(e){this.ChartedEmployees=e.data}.bind(this))},mounted:function(){this.hideHeader()},methods:{getAverage:function(e){return e.reduce(function(e,t){return e+t},0)/e.length},convertRatings:function(e){switch(e){case 0:return"Does Not Meet Expectations";case 1:return"Partially Meets Expectations";case 2:return"Fully Meets Expectations";case 3:return"Exceeds Expectations"}},judgementcounts:function(e,t){},getCount:function(e,t,a){if(e)return e.filter(function(e){return e[t]===a}).length},fnExcelReport:function(){var e='<html xmlns:x="urn:schemas-microsoft-com:office:excel">';e+="<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>",e+="<x:Name>Test Sheet</x:Name>",e+="<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>",e+="</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>",e+="<table border='1px'>",e+=ae()("#ratings").html(),e+=ae()("#selfReview").html(),e+=ae()("#peer").html(),e+=ae()("#manager").html(),console.log(e),e+="</table></body></html>";var t="data:application/vnd.ms-excel",a=window.navigator.userAgent,r=a.indexOf("MSIE ");if(r>0||navigator.userAgent.match(/Trident.*rv\:11\./)){if(window.navigator.msSaveBlob){var n=new Blob([e],{type:"application/csv;charset=utf-8;"});navigator.msSaveBlob(n,"APF_2019.xlsx")}}else ae()("#test").attr("href",t+", "+encodeURIComponent(e)),ae()("#test").attr("download","APF_2019.xls")},addChart:function(){ne.a.chart("highchart",{chart:{type:"column"},title:{text:"Review Rating"},subtitle:{text:""},xAxis:{categories:[""],crosshair:!0},yAxis:{min:0,title:{text:"Rating (%)"}},plotOptions:{column:{pointPadding:0,borderWidth:0}},series:[{name:"Peer",data:[this.averageJudgement]},{name:"Self",data:[this.selfReview&&this.selfReview.judgement?this.selfReview.judgement+1:0]},{name:"Manager",data:[this.managerReview&&this.managerReview.judgement?this.managerReview.judgement+1:0]}]})}},computed:{}},ie=se,oe=(a("89dd"),a("fa53"),Object(p["a"])(ie,Z,ee,!1,null,null,null)),le=oe.exports;r["a"].use(i["a"]);var ce=new i["a"]({routes:[{path:"/",component:C},{path:"/home",component:I,meta:{requiresAuth:!0}},{path:"/signup",component:f},{path:"/logout",component:R},{path:"/employees",component:U,meta:{requiresAuth:!0}},{path:"/employees/:id",component:le,meta:{requiresAuth:!0}},{path:"/reviews/pending",component:D,meta:{requiresAuth:!0}},{path:"/reviews/new",component:Y,meta:{requiresAuth:!0}}]});ce.beforeEach(function(e,t,a){e.matched.some(function(e){return e.meta.requiresAuth})&&null==localStorage.getItem("jwt")?a({path:"/",params:{nextUrl:e.fullPath}}):a()});var ue=ce,me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vue-component"},[a("div",{staticClass:"header-container"},[e._m(0),a("div",{staticClass:"name"},[e._v("\n            "+e._s(e.first_name)+"\n        ")]),a("div",{staticClass:"logout"},[a("a",{attrs:{href:"/#/logout"}},[e._v("LOG OUT")])]),e._m(1)])])},de=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("img",{staticClass:"loginLogo",attrs:{src:a("27dc")}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("hr",{staticClass:"menu",attrs:{align:"left",width:"100%",solid:"15px",color:"#d9d9d9"}})])}],ve={data:function(){return{first_name:""}},created:function(){var e=this,t=localStorage.getItem("jwt");u.a.get("/current_employee",{headers:{Authorization:"Bearer ".concat(t)}}).then(function(t){var a=t.data;e.first_name=a.first_name})},methods:{},computed:{}},pe=ve,he=(a("b6c8"),Object(p["a"])(pe,me,de,!1,null,"79b444c0",null)),fe=he.exports,_e={name:"app",router:ue,components:{Header:fe}},ge=_e,we=Object(p["a"])(ge,n,s,!1,null,null,null),be=we.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(be)}}).$mount("#app")},"58b3":function(e,t,a){"use strict";var r=a("b4b7"),n=a.n(r);n.a},7008:function(e,t,a){"use strict";var r=a("80d2"),n=a.n(r);n.a},"747f":function(e,t,a){"use strict";var r=a("19cc"),n=a.n(r);n.a},"80d2":function(e,t,a){},"89dd":function(e,t,a){"use strict";var r=a("d24d"),n=a.n(r);n.a},b4b7:function(e,t,a){},b655:function(e,t,a){},b6c8:function(e,t,a){"use strict";var r=a("b655"),n=a.n(r);n.a},d24d:function(e,t,a){},fa53:function(e,t,a){"use strict";var r=a("2d61"),n=a.n(r);n.a}});
//# sourceMappingURL=app.ce8625ba.js.map