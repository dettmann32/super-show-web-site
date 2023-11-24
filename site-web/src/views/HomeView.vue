<template>
  <div>
    <carousel :slides="slides" :interval="5000" controls indicators></carousel>
    <CursosCard class="slide"></CursosCard>
    <ImgVue class="slide"></ImgVue>
    <ConhecaSobre class="slide"></ConhecaSobre>
    <ConhecaLojas class="slide"></ConhecaLojas>

  </div>
  </template>


<script >
 
 import CursosCard from '@/components/HomePage/CursosCard.vue';
 import ConhecaSobre from '@/components/HomePage/ConhecaSobre.vue';
 import ConhecaLojas from '../components/HomePage/ConhecaLojas.vue'
 import Carousel from "../components/HomePage/carousel/Carousel.vue";
 import ImgVue from '@/components/HomePage/ImgVue.vue';

export default {
  name: "App",
  components: { Carousel,CursosCard,ConhecaLojas, ConhecaSobre, ImgVue},
  data: () => ({
    slides: [
      "https://dettmann32.github.io/imagens-for-supershow-web-site/imagens/fk%20laranja.png",
      "https://dettmann32.github.io/imagens-for-supershow-web-site/imagens/ss.png",
      "https://dettmann32.github.io/imagens-for-supershow-web-site/imagens/atender%20cliente.png",
    
    ],
  }),
};


</script>

<style scoped >


</style>