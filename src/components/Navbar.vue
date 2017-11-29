<template>
  <div class="top-bar">
    <div class="top-bar-left">
        <ul class="dropdown menu" data-dropdown-menu>
            <li><router-link :to="{name: 'Home'}"><strong>EMS</strong></router-link></li>
            <li><router-link :to="{name: 'Employee'}">Employees</router-link></li>
            <li><router-link :to="{name: 'About'}">About</router-link></li>
        </ul>
    </div>
    <div class="top-bar-right">
      <ul class="menu">
        <li><button class="button" @click="logout">Logout</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
    methods: {
      logout(){
          console.log("Logout button clicked");
      }
    }
}
</script>

<style scoped>
    ul li {
        color: #000 !important;
        text-decoration: none !important;
    }
</style>
