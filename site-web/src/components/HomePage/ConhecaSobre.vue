<template>
    <section class="m-auto flex  flex-col px-5 justify-center  items-center bg-cover w-[100vw]  shadow-xl  lg:flex-row py-5"
        style="background-image: url('https://static.wixstatic.com/media/8a9ccb_230081661a7244819b6b3f14d4fa8ab0~mv2.jpg/v1/fill/w_1151,h_863,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8a9ccb_230081661a7244819b6b3f14d4fa8ab0~mv2.jpg')"
        id="sobrenos">
        <div class="w-[100%] flex flex-col items-center bg-white  p-2 px-6   shadow-2xl rounded-xl ">
            <h1 class="text-red-700 text-[300%] lg:text-[400%]">
                SuperShow
            </h1>
            <h2 class="text-blue-600 text-[150%] lg:text-[200%]">
                Conheça um pouco mais sobre nós!
            </h2>

            <p class="text-justify text-[120%] lg:text-[180%]">
                A história do SUPER SHOW SUPERMERCADOS se confundi com a história da família, ela sempre se desenvolveu a
                partir dos valores familiares, enraizados nas rotinas de trabalho de cada um de nossos colaboradores e com o
                compromisso com a sociedade.<br><br>


                Atualmente a empresa conta com mais de 200 colaboradores, em 5 lojas e 2 depósitos<br><br>


            <ul class="list-disc  text-[120%] lg:text-[180%] lg:ml-2">
                <li>No ano de 2010 primeira filial no bairro São Luiz</li>
                <li>Em 2011 bairro Vila Nova</li>
                <li>Em 2013 investimos em uma loja ao centro do bairro rural de Alto Rio Possmoser</li>
                <li>E em 2017 chegou a vez de São João do Garrafão</li>
            </ul><br><br>


          <span class="text-[120%] lg:text-[180%] text-justify"> O foco estratégico da empresa é ser referência em melhor preço, melhor qualidade de produtos e melhor atendimento
            na região Central Serrana do Espírito Santo, sendo assim ainda temos um grande desafia de conquistar novar áreas
            dentro de fora de Santa Maria de Jetibá.</span> <br><br>

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
                <div class="text-center text-white"><span> 5 Lojas<br> no Municipio </span></div>
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