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
    <div class="w-[100vw]">
        <!-- NAVBAR START -->

        <div class="pb-1 bg-[#F97241] w-[100vw]">
            <div class=" bg-gray-800 pb-1 pt-3 h-[100%] w-[100vw]">
                <nav class="flex flex-wrap items-center justify-between p-4 bg-white h-[100%] ">
                    <div class=" lg:order-2 lg:w-1/5 lg:text-center flex justify-center">
                        <a class=" fex justify-center " href="/">
                            <img src="../../assets/images/Grupo FK_1.webp" alt="logo">
                        </a>
                    </div>
                    <div class="block lg:hidden ">
                        <button @click.prevent="menu()"
                            class="flex items-center px-3 py-2 text-indigo-[#222E42] border border-[#222E42] rounded navbar-burger focus:outline-none focus:ring-2 focus:ring-offset-2">
                            <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>
                                    Menu
                                </title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="hidden w-full navbar-menu lg:order-1 lg:block lg:w-2/5">
                        <a class="block mt-4 mr-10 text-[#222E42] lg:inline-block lg:mt-0 hover:text-indigo-600 text-2xl"
                            href="/#cursos">
                            CURSOS
                        </a>
                        <a class="block mt-4 mr-10 text-[#222E42] lg:inline-block lg:mt-0 hover:text-indigo-600 text-2xl"
                            href="/#sobrenos">
                            SOBRE NÓS
                        </a>

                    </div>
                    <div class="hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/5 lg:text-right">
                        <a class="block mt-4 mr-10 text-[#222E42] lg:inline-block lg:mt-0 hover:text-indigo-600 text-2xl"
                            href="/#lojas">
                            LOJAS
                        </a>

                        <a class="block mt-4 mr-10 text-[#222E42] lg:inline-block lg:mt-0 hover:text-indigo-600 text-2xl"
                            href="#">
                            CONTATOS
                        </a>
                    </div>


                    <!-- MENU RESPONSIVO -->




                    <div class="lg:hidden flex justify-center items-center fixed  left-0 h-[100vh] bg-gray-800 top-0 w-[70vw] transicao"
                        :style="'transform: translateX(-' + tranlate + 'px);'" id="NavBarResponsivo">


                        <div class="absolute right-2 top-2 cursor-pointer" @click="tranlate = 1000">
                            <img src="../../assets/images/icons8-x-48.png" alt="X">
                        </div>
                        <div class=" flex justify-center text-center items-center flex-col h-[100%] gap-7">



                            <div class="  flex felx-col items-center">
                                <a class=" text-[#F97241]   hover:text-orange-600 text-2xl"  href="/#cursos" id="navbar-menu">
                                    CURSOS
                                </a>


                            </div>



                            <div class=" w-full  lg:order-3 block lg:w-2/5">
                                <a class=" text-[#F97241]  hover:text-orange-600 text-2xl"  href="/#sobrenos">
                                    SOBRE NÓS
                                </a>
                            </div>
                            <div class=" w-full  lg:order-3 block lg:w-2/5">
                                <a class=" text-[#F97241]   hover:text-orange-600 text-2xl" href="/#lojas">
                                    LOJAS
                                </a>
                            </div>

                            <div class=" w-full  lg:order-3 block lg:w-2/5">
                                <a class=" text-[#F97241]   hover:text-orange-600 text-2xl" href="#">
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



<style lang="sass" scoped>

.transicao
    transition: transform 1s



#NavBarResponsivo
    z-index: 5000



a::after

    border-radius: 10px
    content:''
    width: 0
    display: block
    height: 3px
    background: #222E42
    transition: .5s ease-out

a:hover::after
    width: 100%

</style>