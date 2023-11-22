<template>
    <div>
        <div id="slider" class=" mx-auto w-[350px] h-[600px] overflow-hidden rounded-xl  lg:mt-0 my-2 ml-2 lg:my-0">
            <div id="slides" class="w-[400%] h-[600px] flex">





                <!-- slide images -->
                <div id="slide" :style="'margin-left:-'+ sliderControll +'%'">
                    <img src="https://dettmann32.github.io/imagens-for-supershow-web-site/imagens/MIS%C3%83O.png" alt="missão">
                </div>

                <div id="slide">
                    <img src="https://dettmann32.github.io/imagens-for-supershow-web-site/imagens/VIS%C3%83O.png" alt="visão">
                </div>


                <div id="slide">
                    <img src="https://dettmann32.github.io/imagens-for-supershow-web-site/imagens/VALORES.png" alt="valores">
                </div>

                <!-- Fim das imagens -->

                <!-- Navigator -->


              

              


                                
            </div>
        </div>
    </div>
</template>




<script setup>
import {ref} from 'vue'


let sliderControll = ref(0)



     function controll(){
            if(sliderControll.value > 25){
                sliderControll.value = 0;
            }else{
                sliderControll.value = sliderControll.value + 25 ;
            }
     }

     setInterval(()=> {
        controll()
     },10000)

 
  




</script>


<style scoped>


#slider{
    z-index: 1000;
}

#slide{
    width: 25%;
    position:relative;
    transition: 3s;
}

#slides  input{
    display: none;
    
}

#slide img {
    width: 100%;
    height: 100%;
}



</style>
