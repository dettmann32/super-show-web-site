<script setup>
import { ref } from 'vue'

let tranlate = ref(1000)


const menu = () => {

    if (tranlate.value == 0) {
        tranlate.value = 1000
    } else if (tranlate.value == 1000) {
        tranlate.value = 0
    }



}





</script>



<template>
    <div>
        <!-- NAVBAR START -->

        <div class="pb-1 bg-orange-400">
            <div class=" bg-gray-800 pb-1 pt-3 ">
                <nav class="flex flex-wrap items-center justify-between p-4 bg-white h-32">
                    <div class=" lg:order-2 lg:w-1/5 lg:text-center flex justify-center">
                        <a class=" fex justify-center " href="#">
                            <img src="../../assets/images/Grupo FK_1.webp" alt="logo">
                        </a>
                    </div>
                    <div class="block lg:hidden">
                        <button @click.prevent="menu()"
                            class="flex items-center px-3 py-2 text-indigo-500 border border-indigo-500 rounded navbar-burger focus:outline-none focus:ring-2 focus:ring-offset-2">
                            <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>
                                    Menu
                                </title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="hidden w-full navbar-menu lg:order-1 lg:block lg:w-2/5">
                        <a class="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600 text-2xl"
                            href="#">
                            CURSOS
                        </a>
                        <a class="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600 text-2xl"
                            href="#">
                            SOBRE NÓS
                        </a>

                    </div>
                    <div class="hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/5 lg:text-right">
                        <a class="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600 text-2xl"
                            href="#">
                            ENDEREÇOS
                        </a>

                        <a class="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600 text-2xl"
                            href="#">
                            CONTATOS
                        </a>
                    </div>


                    <!-- MENU RESPONSIVO -->




                    <div class="lg:hidden flex justify-center items-center absolute  left-0 h-[100vh] bg-gray-800 top-0 w-[70vw] transicao"
                        :style="'transform: translateX(-' + tranlate + 'px);'" id="NavBarResponsivo">


                        <div class="absolute right-2 top-2 cursor-pointer" @click="tranlate = 1000">
                            <img src="../../assets/images/icons8-x-48.png" alt="X">
                        </div>
                        <div class=" flex justify-center text-center items-center flex-col h-[100%] gap-7">



                            <div class="  flex felx-col items-center">
                                <a class=" text-orange-400   hover:text-orange-600 text-2xl" href="#">
                                    CURSOS
                                </a>


                            </div>



                            <div class=" w-full  lg:order-3 block lg:w-2/5">
                                <a class=" text-orange-400   hover:text-orange-600 text-2xl" href="#">
                                    SOBRE NÓS
                                </a>
                            </div>
                            <div class=" w-full  lg:order-3 block lg:w-2/5">
                                <a class=" text-orange-400   hover:text-orange-600 text-2xl" href="#">
                                    ENDEREÇOS
                                </a>
                            </div>

                            <div class=" w-full  lg:order-3 block lg:w-2/5">
                                <a class=" text-orange-400   hover:text-orange-600 text-2xl" href="#">
                                    CONTATOS
                                </a>
                            </div>








                        </div>






                    </div>



                    <!-- MENU RESPONSIVO END -->
                </nav>

            </div>
        </div>


        <!-- NAVBAR END -->





    </div>
</template>



<style lang="sass">

.transicao
    transition: transform 1s



#NavBarResponsivo
    z-index: 5000
    

</style>