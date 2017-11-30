<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><router-link class="navbar-link title" :to="{name: 'Home'}">EMS</router-link></el-menu-item>
        <el-menu-item index="2"><router-link class="navbar-link" :to="{name: 'Employee'}">Employees</router-link></el-menu-item>
        <el-menu-item index="3"><router-link class="navbar-link" :to="{name: 'About'}">About</router-link></el-menu-item>
        <el-menu-item index="4"><el-button plain @click="logout">Logout</el-button></el-menu-item>
    </el-menu>
</template>

<script>
import ElContainer from "../../node_modules/element-ui/packages/container/src/main.vue";
import ElHeader from "../../node_modules/element-ui/packages/header/src/main.vue";
import ElMenu from "../../node_modules/element-ui/packages/menu/src/menu.vue";
import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";

export default {
    data() {
        return {
            activeIndex: '0'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    components: {
        ElButton,
        ElMenu,
        ElHeader,
        ElContainer},
    name: 'Navbar',
}
</script>

<style scoped>
    .navbar-link {
        text-decoration: none;
    }
    .title {
        font-size: 20px;
    }
</style>
