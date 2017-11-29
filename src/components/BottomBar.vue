<template>
    <div id="bottom-bar" class="grid-x grid-margin-x">
        <p>&copy; Employee Management System</p>
        <span id="email"><component is="contacts"></component></span>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: 'BottomBar'
    }
    Vue.component('contacts',{
        template: `<p>&nbsp;Email : ems@ems.com</p>`
    })
</script>

<style>
    #bottom-bar {
        background-color: #555 !important;
        color: #fff !important;
        bottom: 0 !important;
        height: 5rem;
        padding: 2rem;
    }
    #email {
        right: 0 !important;
    }
</style>