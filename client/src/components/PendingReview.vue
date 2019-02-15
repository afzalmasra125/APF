<template id="pending-reviews-page">
    <div class="vue-component">
        <div class="asc-container">
            <div class="container">
                <div class="profileContainer">
                    <div class="container mt-5">
                        <h2>Pending Reviews</h2>
                        <h3>
                            Manager: {{ currentUser.first_name }}
                            {{ currentUser.last_name }}
                        </h3>
                        <div class="form-group">
                            <label class="h3">Employee</label>
                            <select
                                class="form-control"
                                v-model="selectedEmployee"
                            >
                                <option :value="{}">Select</option>
                                <option
                                    v-for="employee of managedEmployees"
                                    :value="employee"
                                    :key="employee.id"
                                >
                                    {{ employee.first_name }}
                                    {{ employee.last_name }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="card">
                <div class="container">
                    <h3>Employees Reviewed</h3>
                    <ul>
                        <li
                            v-for="reviewedEmployee in reviewedEmployees"
                            :key="reviewedEmployee.id"
                        >
                            {{ reviewedEmployee.first_name }}
                            {{ reviewedEmployee.last_name }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card my-3">
                <div class="container">
                    <h3>Employees to be Reviewed</h3>
                    <ul v-if="Object.keys(selectedEmployee).length !== 0">
                        <li
                            v-for="employee in unreviewedEmployees"
                            :key="employee.id"
                        >
                            {{ employee.first_name + " " + employee.last_name }}
                        </li>
                    </ul>
                </div>
            </div> -->
            <div class="card">
                <div class="container">
                    <h3>Send Review Request</h3>
                    <!-- <ul v-show="confirmed">
                        <li class="text-success">Email(s) Sent.</li>
                    </ul> -->
                    <table
                        v-if="Object.keys(selectedEmployee).length !== 0"
                        class="table table-striped"
                    >
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th
                                    v-for="employee in employees"
                                    :key="employee.id"
                                >
                                    {{ employee.first_name }}
                                    {{ employee.last_name }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    {{ selectedEmployee.first_name }}
                                    {{ selectedEmployee.last_name }}
                                </th>
                                <td
                                    v-for="employee in employees"
                                    :key="employee.id"
                                >
                                    <div class="form-check">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            v-bind:value="[
                                                selectedEmployee.id,
                                                employee.id
                                            ]"
                                            v-model="checkedEmployees"
                                        />
                                        <!-- For when reviewed logic is active -->
                                        <!-- <input
                                            class="form-check-input"
                                            type="checkbox"
                                            :disabled="reviewed(employee.id)"
                                            v-bind:value="[
                                                selectedEmployee.id,
                                                employee.id
                                            ]"
                                            v-model="checkedEmployees"
                                        /> -->
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <button class="btn btn-primary my-3" v-on:click="submit()">
                Send Request
            </button>
        </div>
    </div>
</template>
<script>
import axios from "axios";
// import $ from "jquery";
export default {
    data: function() {
        return {
            currentUser: {},
            reviews: [],
            employees: [],
            review: {
                reviewer_id: "",
                reviewee_id: "",
                relationship: "",
                judgement: "",
                leadership: "",
                technical: "",
                positive_feedback: "",
                needs_improvement: ""
            },
            selectedEmployee: {},
            reviewedEmployeeIds: [],
            unreviewedEmployees: [],
            checkedEmployees: []
            // confirmed: false
        };
    },
    created: function() {
        const token = localStorage.getItem("jwt");
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;

        //Populate information on reviews that need to be completed.
        axios.get("/pending_reviews").then(
            function(response) {
                this.reviews = response.data;
            }.bind(this)
        );

        //Populating all employees
        /* Do we want to pull all employees or just the employees of the logged in manager? */
        axios.get("/employees").then(
            function(response) {
                this.employees = response.data;
                // console.log(this.employees);
            }.bind(this)
        );

        // Pulling Current User information
        axios.get("/current_employee").then(res => {
            this.currentUser = res.data;
            // console.log(res.data);
        });
    },
    methods: {
        submit() {
            // this.checkedEmployees.forEach(employee => {
            //     console.log(
            //         this.employees[employee[0] - 1].first_name +
            //             " " +
            //             this.employees[employee[0] - 1].last_name +
            //             " will review " +
            //             this.employees[employee[1] - 1].first_name +
            //             " " +
            //             this.employees[employee[1] - 1].last_name
            //     );
            // });

            // console.log(this.checkedEmployees);
            axios({
                method: "post",
                url: "/email/send",
                data: {
                    checkedEmployees: this.checkedEmployees
                }
            }).then(res => {
                // this.confirmed = res.data["sent"];
                this.$router.push("/home");
            });
        },
        sortUnreviewedEmployees(reviewedEmployeeIds) {
            this.unreviewedEmployees = this.employees.filter(function(
                employee
            ) {
                return this.indexOf(employee.id) < 0;
            },
            reviewedEmployeeIds);
        },
        reviewed(employeeId) {
            if (
                this.unreviewedEmployees
                    .map(employee => employee.id)
                    .indexOf(employeeId) >= 0
            ) {
                return false;
            } else {
                return true;
            }
        }
    },
    computed: {
        managedEmployees() {
            if (!this.currentUser.id) {
                return [];
            }
            return this.employees.filter(
                employee => this.currentUser.id === employee.manager_id
            );
        },
        reviewedEmployees: function() {
            const reviewedEmployees = this.reviews
                .filter(
                    review => this.selectedEmployee.id === review.reviewer_id
                )
                .map(review => review.reviewee);

            this.sortUnreviewedEmployees(
                reviewedEmployees.map(employee => employee.id)
            );
            return reviewedEmployees;
        }
    }
};
</script>
