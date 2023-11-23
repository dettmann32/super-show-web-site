<template>
    <section class="mt-2 w-[100vw] " id="lojas">
        <div class="bg-cover"
            style="background-image: url('https://dettmann32.github.io/imagens-for-supershow-web-site/imagens/texturaFk%20WHITE.png');">
            <div class="text-center">
                <h1 class="text-3xl text-red-600">Conheça Nossas Lojas</h1>
            </div>
            <div class="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 ">


                <router-link to="/SuperShowCentro">


                    <div class="flex  items-center justify-center m-10">
                        <div class="mx-auto px-5">
                            <div
                                class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                                <img class="w-full rounded-lg object-cover object-center"
                                    src="../../assets/images/matrizCentro.png"
                                    alt="product" />
                                <p class="my-4 pl-4 font-bold text-gray-500">SUPER SHOW CENTRO</p>
                                <p class="mb-4 ml-4 text-xl font-semibold text-gray-800">
                                <ul>
                                    <li><a href="http://wa.me/5527998983827" target="_blank" rel="external">(27)9
                                            9898-3827</a> </li>
                                    <li>Segunda a quinta - 8:00h ás 19:00h <br> Sexta a sábado - 8:00h ás 19:00h</li>
                                </ul>
                                </p>
                            </div>
                        </div>
                    </div>



                </router-link>


                <router-link to="./SuperShowVilaNova">

                    <div class="flex  items-center justify-center m-10 ">
                        <div class="mx-auto px-5">
                            <div
                                class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                                <img class="w-full rounded-lg object-cover object-center"
                                    src="https://dettmann32.github.io/imagens-for-supershow-web-site/imagens/SuperShowSaoLuiz.jpg"
                                    alt="product" />
                                <p class="my-4 pl-4 font-bold text-gray-500">SUPER SHOW VILA NOVA</p>
                                <p class="mb-4 ml-4 text-xl font-semibold text-gray-800">
                                <ul>
                                    <li><a href="http://wa.me/552798980669" target="_blank" rel="external">(27) 9
                                            9898-0669</a> </li>
                                    <li>Segunda a quinta - 8:00h ás 19:00h <br> Sexta a sábado - 8:00h ás 19:00h</li>
                                </ul>
                                </p>
                            </div>
                        </div>
                    </div>


                </router-link>


                <router-link to="/SuperShowGarrafao" >
                    <div class="flex  items-center justify-center m-10 ">
                        <div class="mx-auto px-5">
                            <div
                                class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                                <img class="w-full rounded-lg object-cover object-center"
                                    src="https://dettmann32.github.io/imagens-for-supershow-web-site/imagens/SaoJoaoDeGarrafao.jpg"
                                    alt="product" />
                                <p class="my-4 pl-4 font-bold text-gray-500">SUPER SHOW SÃO JOÃO DE GARRAFÃO</p>
                                <p class="mb-4 ml-4 text-xl font-semibold text-gray-800">
                                <ul>
                                    <li><a href="http://wa.me/5527998982797" target="_blank" rel="external">(27) 9
                                            9898-2797</a> </li>
                                    <li>Segunda a sábado - 8:00h ás 19:00h </li>
                                </ul>

                                </p>
                            </div>
                        </div>
                    </div>




                </router-link>




                <router-link to="/SuperShowSaoLuiz">


                    <div class="flex  items-center justify-center m-10 ">
                        <div class="mx-auto px-5">
                            <div
                                class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                                <img class="w-full rounded-lg object-cover object-center"
                                    src="../../assets/images/f3 são luiz.jpeg"
                                    alt="product" />
                                <p class="my-4 pl-4 font-bold text-gray-500">SUPER SHOW SÃO LUIZ</p>
                                <p class="mb-4 ml-4 text-xl font-semibold text-gray-800">
                                <ul>
                                    <li><a href="http://wa.me/5527998970021" target="_blank" rel="external">(27) 9
                                            9897-0021</a> </li>
                                    <li>Segunda a sábado - 8:00h ás 19:00h </li>
                                </ul>
                                </p>
                            </div>
                        </div>
                    </div>


                </router-link>

                <router-link to="/SuperShowRioPosmoser" >
                    <div class="flex  items-center justify-center m-10 ">
                        <div class="mx-auto px-5">
                            <div
                                class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                                <img class="w-full rounded-lg object-cover object-center"
                                    src="../../assets/images/f5.jpg"
                                    alt="product" />
                                <p class="my-4 pl-4 font-bold text-gray-500">SUPER SHOW RIO POSSMOSER</p>
                                <p class="mb-4 ml-4 text-xl font-semibold text-gray-800">
                                <ul>
                                    <li><a href="http://wa.me/5527998984420" target="_blank" rel="external">(27) 9
                                            9898-4420</a>
                                    </li>
                                    <li>Segunda a sábado - 8:00h ás 19:00h </li>
                                </ul>
                                </p>
                            </div>
                        </div>
                    </div>

                </router-link>
            </div>

        </div>


    </section>
</template>




<script setup >



</script>

<style  scoped>

*{
    font-family: Arial, Helvetica, sans-serif; 
} 

section {
    background-image: radial-gradient(#091e41, #222E42)
}

li a {
    color: red;
}

li a:hover {
    color: rgb(226, 33, 33);
    text-decoration: underline;
}



</style>