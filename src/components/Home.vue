<template>
    <el-container>
        <el-main>
            <el-row type="flex" justify="space-around" :gutter="20">
                <el-col :span="12">
                    <div class="card align-center-middle">
                        <div class="card-section">
                            <h4 class="text-center">Number of Employees</h4>
                            <p class="text-center"><strong>{{ numberOfEmployees }}</strong></p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    import  Vue from 'vue'
    import ElContainer from "../../node_modules/element-ui/packages/container/src/main.vue";
    import ElMain from "../../node_modules/element-ui/packages/main/src/main.vue";
    import ElRow from "element-ui/packages/row/src/row";
    import ElCol from "element-ui/packages/col/src/col";
    import ElCard from "../../node_modules/element-ui/packages/card/src/main.vue";
    export default {
        components: {
            ElCard,
            ElCol,
            ElRow,
            ElMain,
            ElContainer},
        name: 'Home',
        data(){
            return{
                message: "Making employee management simple!"
            }
        },
        computed: {
            numberOfEmployees(){
                return this.$store.state.employees.length;
            }
        }
    }
    Vue.component('subtitle',{
        props: ['message'],
        template: `<p><em>{{ message }}</em><slot>The best company in employee management</slot></p>`
    });
</script>

<style scoped>
 p {
     color: blue;
 }
</style>