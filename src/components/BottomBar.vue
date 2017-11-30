<template>
    <el-container id="bottom-bar">
        <el-footer >
            <p>&copy; Employee Management System</p>
            <!--<span id="email"><component is="contacts"></component></span>-->
        </el-footer>
    </el-container>
</template>

<script>
    import Vue from 'vue'
    import ElContainer from "../../node_modules/element-ui/packages/container/src/main.vue";
    import ElFooter from "../../node_modules/element-ui/packages/footer/src/main.vue";

    export default {
        components: {
            ElFooter,
            ElContainer},
        name: 'BottomBar'
    }

    Vue.component('contacts',{
        template: `<p>&nbsp;Email : ems@ems.com</p>`
    })
</script>

<style>
    #bottom-bar {
        background-color: #555;
        color: #fff;
        height: 4rem;
    }
</style>