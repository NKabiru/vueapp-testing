<template>
    <div>
        <h4>Employee Form</h4>
        <div class="grid-x grid-margin-x align-center">
            <div class="large-auto cell">
                First Name<input type="text" v-model="employee.fname">
                Last Name<input type="text" v-model="employee.lname">
                Job<select v-model="employee.job">
                <option value="Developer">Developer</option>
                <option value="Operator">Operator</option>
                <option value="Manager">Manager</option>
                <option value="Technician">Technician</option>
                <option value="Advisor">Advisor</option>
            </select>
                Income<input type="number" v-model="employee.income">
                <button class="button" type="button" @click="addEmployee">Add</button>
            </div>
            <!--<div class="large-auto cell">-->
                <!--<div class="card">-->
                    <!--<div id="number" class="card-section text-center">-->
                        <!--<h4>Employees</h4>-->
                        <!--<p>{{ count }}</p>-->
                        <!--<button @click="increment">Increment</button>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        </div>
        <template v-if="employeeList.length >= 1">
        <div class="grid-x grid-margin-x align-center">
            
            <div class="cell">
                <h4>Employee Table</h4>
                <table :class="tableClass">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Occupation</td>
                            <td>Gross Income</td>
                            <td>Net Income</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="employee in taxedEmployees" :key='employee.id'>
                            <td>{{ employee.id }}</td>
                            <td>{{ employee.fname }} {{ employee.lname}}</td>
                            <td>{{ employee.job }}</td>
                            <td>{{ employee.income}}</td>
                            <td>{{ employee.netIncome }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        </template>
  </div>
</template>

<script>
    var mixin = {
        methods: {
            addEmployee(){
                this.employee.id  =`EK${this.employeeList.length + 1}`;
//                this.employeeList.push(this.employee);
                this.$store.commit('addEmployee', this.employee);
                this.employee = {};
            }
        }
    };

    export default {
        name: 'Employee',
        data() {
            return {
                employee: {},
                tableClass: 'unstriped'
            }
        },
        mixins: [mixin],

        computed:{
            employeeList(){
                return this.$store.state.employees;
            },
            taxedEmployees() {
                return this.$store.getters.netIncome;
            }
        },

        methods: {
            netIncome(){
                this.$store.commit('netIncome');
            },

            added(){
                console.log('New employee added');
                this.$emit('added');
            },
//        netIncome(income){
//            return Math.round(income * 85) / 100;
//        }
        }
    }
</script>

<style>

</style>


