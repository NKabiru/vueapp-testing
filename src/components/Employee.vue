<template>
    <el-container>
        <el-main>
        <h4>Employee Form</h4>
            <el-form>
                <el-form-item label="First Name">
                    <el-input type="text" v-model="employee.fname" clearable></el-input>
                </el-form-item>
                <el-form-item label="Last Name">
                    <el-input type="text" v-model="employee.lname" clearable></el-input>
                </el-form-item>
                <el-form-item label="Occupation">
                    <el-select v-model="employee.job">
                        <el-option value="Developer">Developer</el-option>
                        <el-option value="Operator">Operator</el-option>
                        <el-option value="Manager">Manager</el-option>
                        <el-option value="Technician">Technician</el-option>
                        <el-option value="Advisor">Advisor</el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Income">
                    <el-input type="number" v-model="employee.income"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addEmployee">Add</el-button>
                </el-form-item>
            </el-form>

        <template v-if="employeeList.length >= 1">
        <div class="grid-x grid-margin-x align-center">
            
            <div class="cell">
                <h4>Employee Table</h4>
                <el-table :class="tableClass">
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
                </el-table>
            </div>
        </div>
        </template>

    </el-main>
  </el-container>
</template>

<script>
    import ElContainer from "../../node_modules/element-ui/packages/container/src/main.vue";
    import ElCol from "element-ui/packages/col/src/col";
    import ElRow from "element-ui/packages/row/src/row";
    import ElMain from "../../node_modules/element-ui/packages/main/src/main.vue";
    import ElForm from "../../node_modules/element-ui/packages/form/src/form.vue";
    import ElFormItem from "../../node_modules/element-ui/packages/form/src/form-item.vue";

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
        data(){
           return {
               options:[
                   {value: 'Developer', label: 'Developer'},
                   {value: 'Operator', label: 'Operator'},
                   {value: 'Manager', label: 'Manager'},
                   {value: 'Technician', label: 'Technician'},
                   {value: 'Advisor', label: 'Advisor'}
               ]
           }
        },
        components: {
            ElFormItem,
            ElForm,
            ElMain,
            ElRow,
            ElCol,
            ElContainer},
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


