<template>
    <div>
        <h3>{{ title }}</h3>
        <p>This is a sample app</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                title: 'About EMS'
            }
        }
    }
</script>

<style scoped>
    h3 {
        color: blue;
    }
    p {
        font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
    }
</style>