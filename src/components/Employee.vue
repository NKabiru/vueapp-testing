<template>
    <el-container>
        <el-main>
        <h4>Employee Form</h4>
            <el-form>
                <el-form-item label="First Name">
                    <el-col :span="8">
                        <el-input type="text" v-model="employee.fname" clearable></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="Last Name">
                    <el-col :span="8">
                        <el-input type="text" v-model="employee.lname" clearable></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="Occupation">
                    <el-col :span="8">
                        <el-select v-model="employee.job">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-form-item>
                <el-form-item label="Income">
                    <el-col :span="8">
                        <el-input type="number" v-model="employee.income"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-col :span="8">
                        <el-button type="primary" @click="addEmployee">Add</el-button>
                    </el-col>
                </el-form-item>
            </el-form>

        <template v-if="employeeList.length >= 1">
        <div class="grid-x grid-margin-x align-center">
            
            <div class="cell">
                <h4>Employee Table</h4>
                <el-table :data="taxedEmployees">
                    <el-table-column
                        prop="id"
                        label="ID">
                    </el-table-column>
                    <el-table-column
                        prop="fname"
                        label="First Name">
                    </el-table-column>
                    <el-table-column
                        prop="lname"
                        label="Last Name">
                    </el-table-column>
                    <el-table-column
                        prop="job"
                        label="Occupation">
                    </el-table-column>
                    <el-table-column
                        prop="income"
                        label="Gross Income">
                    </el-table-column>
                    <el-table-column
                        prop="netIncome"
                        label="Net Income">
                    </el-table-column>
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
    import ElOption from "../../node_modules/element-ui/packages/select/src/option.vue";

    let mixin = {
        methods: {
            addEmployee(){
                this.employee.id  =`EK${this.employeeList.length + 1}`;
                this.$store.commit('addEmployee', this.employee);
                this.employee = {};
            }
        }
    };

    export default {
        components: {
            ElOption,
            ElFormItem,
            ElForm,
            ElMain,
            ElRow,
            ElCol,
            ElContainer},
        
        name: 'Employee',
        
        data() {
            return {
                options:[
                   {value: 'Developer', label: 'Developer'},
                   {value: 'Operator', label: 'Operator'},
                   {value: 'Manager', label: 'Manager'},
                   {value: 'Technician', label: 'Technician'},
                   {value: 'Advisor', label: 'Advisor'}
                ],
                employee: {}
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
            }
        }
    }
</script>

<style>
    
</style>


