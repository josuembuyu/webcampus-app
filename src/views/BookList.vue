<template>
    <div id="wrapper" class="is-verticle">
        <top-bar />

        <div class="main_content">
            <div class="container">
                <div class="lg:flex lg:space-x-10">
                    <div class="lg:w-2/3 flex-shrink-0">
                        <div class="text-2xl font-semibold">  Mes ressources  </div>

                        <div class="relative mt-2" uk-slider="finite: true">
                            <div class="uk-slider-container px-1 py-3">
                                <ul class="uk-slider-items uk-child-width-1-4@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid text-sm font-medium text-center">
                                    <li>
                                        <div class="relative overflow-hidden bg-white shadow md:rounded-lg rounded-md">
                                            <a href="book-description.html">
                                               <img src="images/book/book1.png" alt="" class="w-full h-44 object-cover">
                                               <div class="p-3 truncate">  Genie Logiciel II  </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="relative overflow-hidden bg-white shadow md:rounded-lg rounded-md">
                                            <a href="book-description.html">
                                               <img src="images/book/book2.png" alt="" class="w-full h-44 object-cover">
                                               <div class="p-3 truncate"> Gestion de projet </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="relative overflow-hidden bg-white shadow md:rounded-lg rounded-md">
                                            <a href="book-description.html">
                                               <img src="images/book/book3.jpeg" alt="" class="w-full h-44 object-cover">
                                               <div class="p-3 truncate"> Econometrie </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="relative overflow-hidden bg-white shadow md:rounded-lg rounded-md">
                                            <a href="book-description.html">
                                               <img src="images/book/book2.jpg" alt="" class="w-full h-44 object-cover">
                                               <div class="p-3 truncate">  HTML5 & CSS3  </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="relative overflow-hidden bg-white shadow md:rounded-lg rounded-md">
                                            <a href="book-description.html">
                                               <img src="images/book/book4.jpg" alt="" class="w-full h-44 object-cover">
                                               <div class="p-3 truncate">  HTML Breaker  </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="relative overflow-hidden bg-white shadow md:rounded-lg rounded-md">
                                            <a href="book-description.html">
                                               <img src="images/book/book5.jpg" alt="" class="w-full h-44 object-cover">
                                               <div class="p-3 truncate">  CSS Master  </div>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                                <a class="absolute bg-white top-1/4 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="previous">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                </a>
                                <a class="absolute bg-white top-1/4 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="next">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- sidebar -->
        <sidebar />
    </div>
</template>

<script>
import TopBar from "../components/TopBar.vue"
import Sidebar from "../components/Sidebar.vue"

export default {
    name: "BookList",
    components: {
        TopBar,
        Sidebar
    }
}
</script>

<style>

</style>