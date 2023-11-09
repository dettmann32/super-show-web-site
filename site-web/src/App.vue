<template>
  <div>
    <header>
      <NavBar>
      </NavBar>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->

    </header>
    <main>
      <router-view/>
    </main>
    
    
  </div>
</template>

<script setup>
import NavBar from './components/HomePage/NavBar.vue';




</script>


<style lang="scss"></style>
