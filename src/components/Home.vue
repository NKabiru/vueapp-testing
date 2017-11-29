<template>
    <div class="grid-container">
        <div class="grid-x grid-margin-x">
            <p>Welcome to Employee Management System!&nbsp;</p>
            <span><subtitle message="Making employee management simple!"></subtitle></span>
        </div>
    </div>
</template>

<script>
    import  Vue from 'vue'
    export default {
        name: 'Home',
        data(){
            return{
                message: "Making employee management simple!"
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