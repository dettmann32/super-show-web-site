<template>
  <div>
    <carousel :slides="slides" :interval="5000" controls indicators></carousel>
    <CursosCard></CursosCard>
    <ImgVue></ImgVue>
    <ConhecaSobre></ConhecaSobre>
    <ConhecaLojas></ConhecaLojas>

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
      "https://picsum.photos/id/1037/900/400",
      "https://picsum.photos/id/1035/900/400",
      "https://picsum.photos/id/1036/900/400",
    ],
  }),
};


</script>