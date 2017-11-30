<template>
  <div id="app">
    <navbar></navbar>
    <div class="grid-container">
      <router-view/>
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import BottomBar from './components/BottomBar.vue'

export default {
  name: 'app',
  components: { Navbar, BottomBar }
}
</script>

<style>
  *{
    font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
  }
  .grid-container{
    overflow: auto;
    height: 100vh;
    display: flex;
  }
</style>
