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
    
    <FooterVue></FooterVue>
    
  </div>
</template>

<script setup>
import NavBar from './components/HomePage/NavBar.vue';
import FooterVue from './components/FooterVue.vue';




</script>


<style lang="sass">

 


*
  font-family: 'Arial Narrow', Arial, Helvetica, sans-serif
  

body
  overflow-x: hidden
  background-color: #ffff
  
  


  h1  
    color:#F97241 !important
    



</style>



