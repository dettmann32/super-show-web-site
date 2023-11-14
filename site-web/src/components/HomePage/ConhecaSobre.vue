<template>
    <section class="m-auto flex  flex-col xl:flex-row  px-5 justify-center  items-center bg-cover w-[100vw] min-h-[600px]  shadow-xl " style="background-image: url('https://static.wixstatic.com/media/8a9ccb_230081661a7244819b6b3f14d4fa8ab0~mv2.jpg/v1/fill/w_1151,h_863,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8a9ccb_230081661a7244819b6b3f14d4fa8ab0~mv2.jpg')" id="sobrenos">
        <div class="w-[100%] m-auto bg-white xl:w-[100%] mt-0 p-2 shadow-2xl rounded-b-xl" >
            <h1 class="text-red-700 text-3xl">
                MultiShow Supermercados
            </h1>
            <h2 class="text-blue-600 text-2xl">
                Conheça um pouco mais sobre nós!
            </h2>

            <p class="text-justify text-xl ">
                O Multishow Supermercados é uma empresa com mais de 22 anos de história, com cinco lojas presentes no estado
                do Espírito Santo.<br><br>


                Sua primeira loja foi aberta em 2001, em Santa Maria de Jetibá, e desde então tem recebido e entregado
                produtos de qualidade aos clientes.<br> <br>


                As lojas oferecem uma ampla estrutura, incluindo padaria com produtos diversos, hortifruti com frutas e
                legumes frescos, e açougue com as melhores carnes.<br> <br>


                Para maior comodidade, a empresa realiza entregas das compras dos clientes, tornando a experiência de compra
                ainda mais vantajosa no Super Show Supermercados.<br> <br>

            </p>
        </div>


        <!-- <div id="carrosel" class="flex m-auto h-[400px] w-[350px] bg-red-700 xl:ml-5 xl:mt-20 xl:w-[30vw] overflow-hidden">
            <div class="h-[400px] w-[350px] "> <img class="h-[400px] w-[350px]"
                    src="https://img.freepik.com/fotos-gratis/barbeiro-de-avental-segurando-um-aparador-de-barba-mostrando-os-polegares-para-cima-sorrindo-olhando-para-a-camera-em-pe-sobre-um-fundo-rosa_141793-67187.jpg?w=740&t=st=1699641170~exp=1699641770~hmac=e77e694c4cddcb1dc4dbcf9a45c0d3a7e75d8b9f84f16f2232986c073c23c3f3"
                    alt="">
            </div>
            <div class="h-[400px] w-[350px] ">
                <img class="h-[400px] w-[350px]"
                    src="https://img.freepik.com/fotos-gratis/empregado-de-entregador-em-uniforme-de-camiseta-em-branco-de-bone-vermelho-olhando-para-a-camera-com-os-bracos-cruzados-sorrindo-confiante-feliz-e-positivo-em-pe-sobre-fundo-marrom_141793-140406.jpg?t=st=1699641170~exp=1699641770~hmac=eaf72e04dd5b72ffe4768f77aa10b24dd7f022ad6539b5832c9f8fafbac55843"
                    alt="">
            </div>
        </div> -->

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