<template>
    <section class="m-auto flex  flex-col px-5 justify-center  items-center bg-cover w-[100vw]  shadow-xl  lg:flex-row py-5" style="background-image: url('https://static.wixstatic.com/media/8a9ccb_230081661a7244819b6b3f14d4fa8ab0~mv2.jpg/v1/fill/w_1151,h_863,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8a9ccb_230081661a7244819b6b3f14d4fa8ab0~mv2.jpg')" id="sobrenos">
        <div class="w-[100%] flex flex-col items-center bg-white p-2 shadow-2xl rounded-xl lg:h-[600px]" >
            <h1 class="text-red-700 text-[300%]">
                Grupo FK
            </h1>
            <h2 class="text-blue-600 text-[150%] ">
                Conheça um pouco mais sobre nós!
            </h2>

            <p class="text-justify text-[120%] lg:text-[135%]" >
                O SuperShow Supermercados é uma empresa com mais de 22 anos de história, com cinco lojas presentes no estado
                do Espírito Santo.<br><br>


                Sua primeira loja foi aberta em 2001, em Santa Maria de Jetibá, e desde então tem recebido e entregado
                produtos de qualidade aos clientes.<br><br>


                As lojas oferecem uma ampla estrutura, incluindo padaria com produtos diversos, hortifruti com frutas e
                legumes frescos, e açougue com as melhores carnes.<br><br>


                Para maior comodidade, a empresa realiza entregas das compras dos clientes, tornando a experiência de compra
                ainda mais vantajosa no SuperShow Supermercados.<br><br>

            </p>
        </div>


      

        <CarouselSobre></CarouselSobre>



    </section>
    <section class="m-auto w-[100vw]">
        <div class="flex justify-between mt-2  p-5  m-auto bg-gray-800 items-center">
            <div class="">
                <div><img src="../../assets/images/1.webp" alt=""></div>
                <div class="text-center text-white"><span>+3500 <br> Clientes Diarios</span></div>
            </div>

            <div>
                <div><img src="../../assets/images/2.webp" alt=""></div>
                <div class="text-center text-white"><span> 5 Lojas<br>  no Municipio </span></div>
            </div>

            <div>
               <div> <img src="../../assets/images/3-removebg-preview (1).webp" alt=""></div>
               <div class="text-center text-white"><span>+20 Anos <br> de Comercio </span></div>
            </div>

        </div>

    </section>
</template>


<script setup>
import CarouselSobre from './CarouselSobre.vue';



</script>