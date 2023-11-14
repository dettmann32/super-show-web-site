<template>
    <div >
        <div id="slider" class=" mx-auto w-[40vw] h-[50vw] overflow-hidden rounded-sm my-4 ml-2">
            <div id="slides" class="w-[400%] h-[400px] flex">





                <!-- slide images -->
                <div id="slide" :style="'margin-left:-'+ sliderControll +'%'">
                    <img src="https://dettmann32.github.io/imagens-for-supershow-web-site/imagens/reposicao2.png" alt="">
                </div>

                <div id="slide">
                    <img src="https://dettmann32.github.io/imagens-for-supershow-web-site/imagens/imagensCursos/a%C3%A7ougueiro%202.jpg" alt="">
                </div>


                <div id="slide">
                    <img src="https://dettmann32.github.io/imagens-for-supershow-web-site/imagens/imagensCursos/op%20de%20caixa%203.png" alt="">
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
     },5000)

 
  




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
    width: 800px;
    height: 400px;
}



</style>
