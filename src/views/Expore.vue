<template>
  <div id="wrapper" class="is-verticle">
        <!--  Header  -->
        <top-bar />

        <!-- Main Contents -->
        <div class="main_content">
                <!-- Slideshow -->
                <div class="uk-position-relative uk-visible-toggle overflow-hidden lg:-mt-20" tabindex="-1"
                uk-slideshow="animation: scale ;min-height: 200; max-height: 450 ;autoplay: t rue">
                <ul class="uk-slideshow-items rounded">
                    <li>
                        <div class="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
                            <img src="images/hero-2.jpg" class="object-cover" alt="" uk-cover>
                        </div>
                        <div class="container relative md:p-20 md:mt-7 p-5 h-full"> 
                            <div uk-slideshow-parallax="scale: 1,1,0.8" class="flex flex-col justify-center h-full w-full space-y-3">
                                <h1 uk-slideshow-parallax="y: 100,0,0" class="lg:text-4xl text-2xl text-white font-semibold">Aux étudiants finaliste 2020-2021</h1>
                                <p uk-slideshow-parallax="y: 150,0,0" class="text-base text-white font-medium pb-4 lg:w-1/2">
                                    Concerne: Rappel des défenses de TFC et mémoires 2020-2021...
                                </p>
                                <a uk-slideshow-parallax="y: 200,0,0" href="#" class="bg-opacity-90 bg-white py-2.5 rounded-md text-base text-center w-32">Lire plus</a> 
                            </div>
                        </div>
                    </li> 
                </ul>
                <ul class="uk-slideshow-nav uk-dotnav absolute bottom-0 left-0 m-7 lg:flex hidden"></ul>
                </div> 

                <div class="container">
                    <!--  slider courses --> 
                    <div class="sm:my-4 my-3 flex items-end justify-between pt-3">
                        <h2 class="text-2xl font-semibold"> Mes cours  </h2>
                        <a href="#" class="text-blue-500 sm:block hidden"> Voir plus </a>
                    </div>

                    <div class="mt-3">
                        <h4 class="py-3 border-b font-semibold text-grey-700  mx-1 mb-4" hidden> <ion-icon name="star"></ion-icon> Featured today </h4>

                        <!--  slider -->
                        <div class="mt-3">

                            <h4 class="py-3 border-b font-semibold text-grey-700  mx-1 mb-4" hidden> <ion-icon name="star"></ion-icon> Featured today </h4>

                            <div class="relative" uk-slider="finite: true">

                                <div class="uk-slider-container px-1 py-3">

                                    <ul class="uk-slider-items uk-child-width-1-3@m uk-child-width-1-2@s uk-grid-small uk-grid">

                                        <li>

                                            <router-link to="/course/1" class="uk-link-reset">
                                                <div class="card uk-transition-toggle">
                                                    <div class="card-media h-40">
                                                        <div class="card-media-overly"></div>
                                                        <img src="images/courses/img-1.png" alt="" class="">
                                                    </div>
                                                    <div class="card-body p-4">
                                                        <div class="font-semibold line-clamp-2"> Langage de programmation C#. </div>
                                                        <div class="flex space-x-2 items-center text-sm pt-3">
                                                            <div> 20 heures  </div>
                                                            <div> · </div>
                                                            <div> 20 lectures </div>
                                                        </div>
                                                        <div class="pt-1 flex items-center justify-between">
                                                            <div class="text-sm font-medium"> Claude KIKUATI</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </router-link>

                                        </li>
                                        <li>

                                            <router-link to="/course/1" class="uk-link-reset">
                                                <div class="card uk-transition-toggle">
                                                    <div class="card-media h-40">
                                                        <div class="card-media-overly"></div>
                                                        <img src="images/courses/img-2.png" alt="" class="">
                                                    </div>
                                                    <div class="card-body p-4">
                                                    <div class="font-semibold line-clamp-2">Administration réseaux</div>
                                                        <div class="flex space-x-2 items-center text-sm pt-3">
                                                            <div>  20 houres  </div>
                                                            <div>·</div>
                                                            <div> 26 lectures </div>
                                                        </div>
                                                        <div class="pt-1 flex items-center justify-between">
                                                            <div class="text-sm font-medium"> Emmanuel MATONDO </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </router-link>

                                        </li>
                                        <li>

                                            <router-link to="/course/1" class="uk-link-reset">
                                                <div class="card uk-transition-toggle">
                                                    <div class="card-media h-40">
                                                        <div class="card-media-overly"></div>
                                                        <img src="images/courses/img-3.png" alt="" class="">
                                                    </div>
                                                    <div class="card-body p-4">
                                                        <div class="font-semibold line-clamp-2">Securité Informatique</div>
                                                        <div class="flex space-x-2 items-center text-sm pt-3">
                                                            <div>  18 heures  </div>
                                                            <div>·</div>
                                                            <div> 42 lectures </div>
                                                        </div>
                                                        <div class="pt-1 flex items-center justify-between">
                                                            <div class="text-sm font-medium"> Patrick ONOYA </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </router-link>

                                        </li>
                                        <li>

                                            <router-link to="/course/1" class="uk-link-reset">
                                                <div class="card uk-transition-toggle">
                                                    <div class="card-media h-40">
                                                        <div class="card-media-overly"></div>
                                                        <img src="images/courses/img-4.png" alt="" class="">
                                                    </div>
                                                    <div class="card-body p-4">
                                                        <div class="font-semibold line-clamp-2">Système embarqués</div>
                                                        <div class="flex space-x-2 items-center text-sm pt-3">
                                                            <div> 32 heures  </div>
                                                            <div>·</div>
                                                            <div> 4 lectures</div>
                                                        </div>
                                                        <div class="pt-1 flex items-center justify-between">
                                                            <div class="text-sm font-medium">Samy BOFANDO</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </router-link>

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

                    <!--  books  --> 
                    <div class="sm:my-4 my-3 flex items-end justify-between pt-3">
                        <h2 class="text-2xl font-semibold"> Mes ressources </h2>
                    <a href="#" class="text-blue-500 sm:block hidden"> Voir plus </a>
                    </div> 

                    <div class="relative" uk-slider="finite: true">
                        <div class="uk-slider-container px-1 py-3">
                            <ul
                                class="uk-slider-items uk-child-width-1-5@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid text-sm font-medium text-center">
                                <li>
                                    <div class="card">
                                        <router-link to="/explore">
                                            <img src="images/book/book1.png" alt="" class="w-full h-52 object-cover">
                                            <div class="p-3 truncate">Genie Logiciel II</div>
                                        </router-link>
                                    </div>
                                </li>
                                <li>
                                    <div class="card">
                                        <router-link to="/explore">
                                            <img src="images/book/book2.png" alt="" class="w-full h-52 object-cover">
                                            <div class="p-3 truncate"> Gestion de projet </div>
                                        </router-link>
                                    </div>
                                </li>
                                <li>
                                    <div class="card">
                                        <a href="book-description.html">
                                            <img src="images/book/book3.jpeg" alt="" class="w-full h-52 object-cover">
                                            <div class="p-3 truncate"> Econometrie </div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="card">
                                        <a href="book-description.html">
                                            <img src="images/book/book2.jpg" alt="" class="w-full h-52 object-cover">
                                            <div class="p-3 truncate"> HTML5 & CSS3 </div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="card">
                                        <a href="book-description.html">
                                            <img src="images/book/book4.jpg" alt="" class="w-full h-52 object-cover">
                                            <div class="p-3 truncate">HTML Breaker</div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div class="card">
                                        <a href="book-description.html">
                                            <img src="images/book/book5.jpg" alt="" class="w-full h-52 object-cover">
                                            <div class="p-3 truncate"> CSS Master </div>
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


                    <!--  episcodes  -->
                    <!-- this is user toggle media to remove unwanted class for small devices more check docs uikit on https://getuikit.com/docs/toggle. -->
                    <div class="tube-card p-4 mt-3" uk-toggle="cls: tube-card p-4; mode: media; media: 640">
    
                        <h4 class="py-3 px-5 border-b font-semibold text-grey-700 -mx-4 -mt-3 mb-4">Recemment publié</h4>
    
                        <div class="relative -mx-1" uk-slider="finite: true">
                    
                            <div class="uk-slider-container md:px-1 px-2 py-3">
                                <ul class="uk-slider-items uk-child-width-1-3@m uk-child-width-1-2 uk-grid-small uk-grid">
                                    <li>
                                        <a href="episodes-watch.html">
                                            <div class="w-full md:h-40 h-28 overflow-hidden rounded-lg relative">
                                                <img src="images/episodes/img-1.jpeg" alt="" class="w-full h-full absolute inset-0 object-cover">
                                                <span
                                                    class="absolute bottom-2 right-2 px-2 py-1 text-xs font-semibold bg-black bg-opacity-50 text-white rounded">
                                                    12:21</span>
                                                <img src="http://demo.foxthemes.net/courseplus-v4.3/assets/images/icon-play.svg" class="w-12 h-12 uk-position-center" alt="">
                                            </div>
                                        </a>
                                        <div class="pt-3">
                                            <a href="episodes-watch.html" class="font-semibold line-clamp-2">  Création d'un site e-commerce avec WordPress #Laboratoire Informatique  </a>
                                            <p class="text-sm pt-1"> Par <a href="#"> Benjamin HYANGANGA  </a> </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="episodes-watch.html">
                                            <div class="w-full md:h-40 h-28 overflow-hidden rounded-lg relative">
                                                <img src="images/episodes/img-2.jpeg" alt="" class="w-full h-full absolute inset-0 object-cover">
                                                <span class="absolute bottom-2 right-2 px-2 py-1 text-xs font-semibold bg-black bg-opacity-50 text-white rounded">
                                                    12:21</span>
                                                <img src="http://demo.foxthemes.net/courseplus-v4.3/assets/images/icon-play.svg" class="w-12 h-12 uk-position-center" alt="">
                                            </div>
                                        </a>
                                        <div class="pt-3">
                                            <a href="episodes-watch.html" class="font-semibold line-clamp-2">  Un projet de A à Z avec l'architecture micro-services #Genie Logiciel II   </a>
                                            <p href="episodes-watch.html" class="text-sm pt-1"> Par <a href="#"> Olga Kavira </a> </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="episodes-watch.html">
                                            <div class="w-full md:h-40 h-28 overflow-hidden rounded-lg relative">
                                                <img src="images/episodes/img-4.png" alt="" class="w-full h-full absolute inset-0 object-cover">
                                                <span class="absolute bottom-2 right-2 px-2 py-1 text-xs font-semibold bg-black bg-opacity-50 text-white rounded">
                                                    12:21</span>
                                                <img src="http://demo.foxthemes.net/courseplus-v4.3/assets/images/icon-play.svg" class="w-12 h-12 uk-position-center" alt="">
                                            </div>
                                        </a>
                                        <div class="pt-3">
                                            <a href="episodes-watch.html" class="font-semibold line-clamp-2">  Comment configurer votre CPanel et proceder à l'herbegement WordPress #Laboratoire Informatique    </a>
                                            <p class="text-sm pt-1"> Par <a href="#"> Benjamin HYANGANGA </a> </p>
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

        <!-- sidebar -->
        <sidebar />
  </div>
</template>

<script>
import TopBar from "../components/TopBar.vue"
import Sidebar from "../components/Sidebar.vue"

export default {
    name: "Explore",
    components: {
        TopBar,
        Sidebar
    }
}
</script>

<style>
#wrapper{
    text-align: initial;
}
</style>