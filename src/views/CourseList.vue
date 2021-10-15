<template>
    <div id="wrapper" class="is-verticle">
        <top-bar />

        <div class="main_content">
            <div class="container">
                <div class="md:flex justify-between items-center mb-8">
                    <div>
                        <div class="text-xl font-semibold"> Cours : Premier semestre </div>
                        <div class="text-sm mt-2 font-medium text-gray-500 leading-6">  La liste des cours disponible selon l'horaire du premier semestre</div>
                    </div>
                </div>

                <!--   Courselist  -->
                <div class="tube-card mt-3 lg:mx-0 -mx-5">
                    <h4 class="py-3 px-5 border-b font-semibold text-grey-700"> <ion-icon name="star"></ion-icon> Liste des cours </h4>
                    <div class="divide-y">
                        <div class="flex md:space-x-6 space-x-3 md:p-5 p-2 relative">
                            <router-link to="/course/1" class="md:w-60 md:h-36 w-28 h-20 overflow-hidden rounded-lg relative shadow-sm">
                                <img src="images/courses/img-5.jpg" alt=""  class="w-full h-full absolute inset-0 object-cover">
                            </router-link>
                            <div class="flex-1 md:space-y-2 space-y-1">
                                <router-link to="/course/1" class="md:text-xl font-semibold line-clamp-2"> Langage de programmation C#. </router-link>
                                <p class="leading-6 pr-4 line-clamp-2 md:block hidden"> Lorem ipsum dolor sit amet,
                                    consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                    magna . </p>
                                <a href="#" class="md:font-semibold block text-sm"> Claude KIKUATI</a>
                                <div class="flex items-center justify-between">
                                    <div class="flex space-x-2 items-center text-sm">
                                        <div> 20 heures  </div>
                                        <div> · </div>
                                        <div> 20 lectures </div>
                                    </div>
                                    <router-link to="/course/1" class="md:flex items-center justify-center h-9 px-8 rounded-md border -mt-3.5 hidden"> Voir </router-link>
                                </div>

                                <div class="absolute top-1 right-3 md:flex hidden">
                                    <a href="#" class="hover:bg-gray-200 p-1.5 inline-block rounded-full">
                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6">
                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                     </svg>
                                    </a>
                                    <div class="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base border border-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700" uk-drop="mode: hover;pos: top-right">

                                        <ul class="space-y-1">
                                          <li>
                                              <router-link to="/course/1" class="flex items-center px-3 py-2 text-sm hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                <ion-icon name="share-outline" class="mr-1 text-lg"></ion-icon> Voir
                                              </router-link>
                                          </li>
                                          <li>
                                              <a href="#" class="flex items-center px-3 py-2 text-sm hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                <ion-icon name="star-outline" class="mr-1 text-lg"></ion-icon>  Partager
                                              </a>
                                          </li>
                                          <li>
                                              <a href="#" class="flex items-center px-3 py-2 text-sm hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                <ion-icon name="bookmark-outline" class="mr-1 text-lg"></ion-icon>   Ajouter aux favoris
                                              </a>
                                          </li>
                                        </ul>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="flex md:space-x-6 space-x-3 md:p-5 p-2 relative">
                            <router-link to="/course/1" class="md:w-60 md:h-36 w-28 h-20 overflow-hidden rounded-lg relative shadow-sm">
                                <img src="images/courses/img-2.png" alt=""  class="w-full h-full absolute inset-0 object-cover">
                            </router-link>
                            <div class="flex-1 md:space-y-2 space-y-1">
                                <router-link to="/course/1" class="md:text-xl font-semibold line-clamp-2"> Administration réseaux  </router-link>
                                <p class="leading-6 pr-4 line-clamp-2 md:block hidden"> Lorem ipsum dolor sit amet,
                                    consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                    magna . </p>
                                <a href="#" class="md:font-semibold block text-sm"> Emmanuel MATONDO</a>
                                <div class="flex items-center justify-between">
                                    <div class="flex space-x-2 items-center text-sm">
                                        <div> 20 heures  </div>
                                        <div> · </div>
                                        <div> 20 lectures </div>
                                    </div>
                                    <router-link to="/course/1" class="md:flex items-center justify-center h-9 px-8 rounded-md border -mt-3.5 hidden"> Voir </router-link>
                                </div>

                                <div class="absolute top-1 right-3 md:flex hidden">
                                    <a href="#" class="hover:bg-gray-200 p-1.5 inline-block rounded-full">
                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6">
                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                     </svg>
                                    </a>
                                    <div class="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base border border-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700" uk-drop="mode: hover;pos: top-right">

                                        <ul class="space-y-1">
                                            <li>
                                                <a href="#" class="flex items-center px-3 py-2 text-sm hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                    <ion-icon name="share-outline" class="mr-1 text-lg"></ion-icon> Voir
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="flex items-center px-3 py-2 text-sm hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                    <ion-icon name="star-outline" class="mr-1 text-lg"></ion-icon>  Partager
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="flex items-center px-3 py-2 text-sm hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                    <ion-icon name="bookmark-outline" class="mr-1 text-lg"></ion-icon>   Ajouter aux favoris
                                                </a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="flex md:space-x-6 space-x-3 md:p-5 p-2 relative">
                            <router-link to="/course/1" class="md:w-60 md:h-36 w-28 h-20 overflow-hidden rounded-lg relative shadow-sm">
                                <img src="images/courses/img-4.png" alt=""  class="w-full h-full absolute inset-0 object-cover">
                            </router-link>
                            <div class="flex-1 md:space-y-2 space-y-1">
                                <router-link to="/course/1" class="md:text-xl font-semibold line-clamp-2"> Systèmes embarqués  </router-link>
                                <p class="leading-6 pr-4 line-clamp-2 md:block hidden"> Lorem ipsum dolor sit amet,
                                    consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                    magna . </p>
                                <a href="#" class="md:font-semibold block text-sm"> Samy BOFANDO</a>
                                <div class="flex items-center justify-between">
                                    <div class="flex space-x-2 items-center text-sm">
                                        <div> 32 heures  </div>
                                        <div>·</div>
                                        <div> 4 lectures</div>
                                    </div>
                                    <router-link to="/course/1" class="md:flex items-center justify-center h-9 px-8 rounded-md border -mt-3.5 hidden"> Voir </router-link>
                                </div>

                                <div class="absolute top-1 right-3 md:flex hidden">
                                    <a href="#" class="hover:bg-gray-200 p-1.5 inline-block rounded-full">
                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6">
                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                     </svg>
                                    </a>
                                    <div class="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base border border-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700" uk-drop="mode: hover;pos: top-right">

                                        <ul class="space-y-1">
                                            <li>
                                                <a href="#" class="flex items-center px-3 py-2 text-sm hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                    <ion-icon name="share-outline" class="mr-1 text-lg"></ion-icon> Voir
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="flex items-center px-3 py-2 text-sm hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                    <ion-icon name="star-outline" class="mr-1 text-lg"></ion-icon>  Partager
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="flex items-center px-3 py-2 text-sm hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                    <ion-icon name="bookmark-outline" class="mr-1 text-lg"></ion-icon>   Ajouter aux favoris
                                                </a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>

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
    name: "CourseList",
    components: {
        TopBar,
        Sidebar
    }
}
</script>

<style>

</style>