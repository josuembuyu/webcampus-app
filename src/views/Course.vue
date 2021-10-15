<template>
  <div id="wrapper" class="is-verticle">
        <top-bar />
        <!-- Main Contents -->
        <div class="main_content">
                <!-- course preview details -->
                <div class="bg-gradient-to-tr from-pink-500 to-red-500 text-white">
                    <div class="container p-0">
                        <div class="lg:flex items-center lg:space-x-12 lg:py-10 lg:px-8 p-4">

                            <div class="lg:w-4/12">
                                <div class="w-full h-40 overflow-hidden rounded-lg relative lg:mb-0 mb-4">
                                    <img src="images/courses/img-1.png" alt="" class="w-full h-full absolute inset-0 object-cover">
                                </div>
                            </div>
                            <div class="lg:w-8/12">
                                    
                                <h1 class="lg:leading-10 lg:text-2xl text-white text-xl leading-8 font-semibold">Langage de programmation C#.</h1>
                                <p class="line-clamp-2 mt-3 md:block hidden">C# est l'un des langages de programmation les plus polyvalents et les plus modernes au monde. ... Le C# peut être utilisé pour écrire presque tous les types de logiciels, y compris les applications pour consoles, les applications mobiles, les applications Windows, les sites web, les blockchains ou encore pour de l'IA.</p>
                                <br />
                                <ul class="lg:flex text-gray-100">
                                    <li> Par <a href="#" class="text-white fond-bold hover:underline hover:text-white"> Claude KIKUATI </a> </li>
                                    <span class="lg:block hidden mx-3 text-2xl">·</span>
                                    <li> Dernière mise à jour 10 oct 2021</li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>

                <!--  course tabs -->
                <div class="bg-white border-b z-20 mb-4 overflow-hidden" uk-sticky="media: 992; offset:70">
                    <div class="mcontainer py-0 lg:px-20 flex justify-between items-center"> 

                        <nav class="cd-secondary-nav nav-smal l flex-1">
                            <ul class="space-x-3" uk-scrollspy-nav="closest: li; scroll: true">
                                <li><a href="#Overview" uk-scroll>Resumé</a></li>
                                <li><a href="#curriculum" uk-scroll>Table de matière</a></li> 
                                <li><a href="#reviews">Préoccupation</a></li>
                            </ul>
                        </nav>
                        
                    </div>
                </div>

                <div class="container p-0">
                    <div class="space-y-5 lg:w-9/12 mx-auto">
                        <!-- course description -->
                        <div class="tube-card p-5 lg:p-8" id="Overview">
                            <div class="space-y-6">
                                <div>
                                    <h3 class="text-xl font-semibold mb-3"> Description </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                        tincidunt ut
                                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim laoreet dolore magna
                                        aliquam erat
                                        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                                        lobortis
                                        nisl ut aliquip ex ea commodo consequat
                                    </p>
                                </div>
                                <div>
                                    <h3> Here is exactly what we cover in this course: </h3>
                                        <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                        nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                        Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod
                                        mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                                        wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                                        aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>

                        <!-- course Curriculum -->
                        <div id="curriculum">
                            <h3 class="mb-4 text-xl font-semibold lg:mb-5"> Table de matière </h3>
                            <ul uk-accordion="multiple: true" class="tube-card p-4 divide-y space-y-3">
        
                                <li class="uk-open">
                                    <a class="uk-accordion-title text-md mx-2 font-semibold" href="#">  <div class="mb-1 text-sm font-medium"> Section 1 </div> Html Introduction </a>
                                    <div class="uk-accordion-content mt-3 text-base">
            
                                        <ul class="course-curriculum-list font-medium">
                                            <li class=" hover:bg-gray-100 p-2 flex rounded-md">
                                                <ion-icon name="play-circle" class="text-2xl mr-2"></ion-icon> Introduction <span class="text-sm ml-auto"> 4 min </span>
                                            </li>
                                            <li class=" hover:bg-gray-100 p-2 flex rounded-md">
                                                <ion-icon name="play-circle" class="text-2xl mr-2"></ion-icon> What is HTML <span class="text-sm ml-auto"> 5 min </span>
                                            </li>
                                            <li class=" hover:bg-gray-100 p-2 flex rounded-md">
                                                <ion-icon name="play-circle" class="text-2xl mr-2"></ion-icon>
                                                What is a Web page? <span class="text-sm ml-auto"> 8 min </span>
                                            </li>
                                            <li class=" hover:bg-gray-100 p-2 flex rounded-md">
                                                <ion-icon name="play-circle" class="text-2xl mr-2"></ion-icon>
                                                Your First Web Page  
                                                <a href="#trailer-modal" class="bg-gray-200 ml-4 px-2 py-1 rounded-full text-xs" uk-toggle=""> Preview </a>
                                                <span class="text-sm ml-auto"> 4 min </span>
                                            </li>
                                            <li class=" hover:bg-gray-100 p-2 flex rounded-md">
                                                <ion-icon name="play-circle" class="text-2xl mr-2"></ion-icon>
                                                Brain Streak <span class="text-sm ml-auto"> 5 min </span>
                                            </li>
                                        </ul>
            
                                    </div>
                                </li>
                                <li class="pt-2">
                                    <a class="uk-accordion-title text-md mx-2 font-semibold" href="#"> <div class="mb-1 text-sm font-medium"> Section 2 </div> Your First webpage  </a>
                                    <div class="uk-accordion-content mt-3 text-base">
            
                                        <ul class="course-curriculum-list font-medium">
                                            <li class=" hover:bg-gray-100 p-2 flex rounded-md">
                                                <ion-icon name="play-circle" class="text-2xl mr-2"></ion-icon> Headings
                                                <span class="text-sm ml-auto"> 4 min </span>
                                            </li>
                                            <li class=" hover:bg-gray-100 p-2 flex rounded-md">
                                                <ion-icon name="play-circle" class="text-2xl mr-2"></ion-icon> Paragraphs
                                                <span class="text-sm ml-auto"> 5 min </span>
                                            </li>
                                            <li class=" hover:bg-gray-100 p-2 flex rounded-md">
                                                <ion-icon name="play-circle" class="text-2xl mr-2"></ion-icon>
                                                Emphasis and Strong Tag 
                                                <span class="text-sm ml-auto"> 8 min </span>
                                            </li>
                                            <li class=" hover:bg-gray-100 p-2 flex rounded-md">
                                                <ion-icon name="play-circle" class="text-2xl mr-2"></ion-icon>
                                                Brain Streak 
                                                <a href="#trailer-modal" class="bg-gray-200 ml-4 px-2 py-1 rounded-full text-xs" uk-toggle=""> Preview </a>
                                                <span class="text-sm ml-auto"> 4 min </span>
                                            </li>
                                            <li class=" hover:bg-gray-100 p-2 flex rounded-md">
                                                <ion-icon name="play-circle" class="text-2xl mr-2"></ion-icon>
                                                Live Preview Feature
                                                <span class="text-sm ml-auto"> 5 min </span>
                                            </li>
                                        </ul>
            
                                    </div>
                                </li>
                                <li class="pt-2">
                                    <a class="uk-accordion-title text-md mx-2 font-semibold" href="#"> <div class="mb-1 text-sm font-medium"> Section 3 </div> Build Complete Webste  </a>
                                    <div class="uk-accordion-content mt-3 text-base">
            
                                        <ul class="course-curriculum-list font-medium">
                                            <li class=" hover:bg-gray-100 p-2 flex rounded-md">
                                                <ion-icon name="play-circle" class="text-2xl mr-2"></ion-icon> The paragraph tag
                                                <span class="text-sm ml-auto"> 4 min </span>
                                            </li>
                                            <li class=" hover:bg-gray-100 p-2 flex rounded-md">
                                                <ion-icon name="play-circle" class="text-2xl mr-2"></ion-icon> The break tag
                                                <span class="text-sm ml-auto"> 5 min </span>
                                            </li>
                                            <li class=" hover:bg-gray-100 p-2 flex rounded-md">
                                                <ion-icon name="play-circle" class="text-2xl mr-2"></ion-icon>
                                                Headings in HTML
                                                <span class="text-sm ml-auto"> 8 min </span>
                                            </li>
                                            <li class=" hover:bg-gray-100 p-2 flex rounded-md">
                                                <ion-icon name="play-circle" class="text-2xl mr-2"></ion-icon>
                                                Bold, Italics Underline 
                                                <a href="#trailer-modal" class="bg-gray-200 ml-4 px-2 py-1 rounded-full text-xs" uk-toggle=""> Preview </a>
                                                <span class="text-sm ml-auto"> 4 min </span>
                                            </li>
                                        </ul>
            
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <!-- course Reviews -->
                        <div  id="reviews" class="tube-card p-5">
                            <h3 class="text-xl font-semibold mb-3"> Préoccupation </h3>
                            <div class="space-y-4 my-5">
                    
                                <div class="bg-gray-50 border flex gap-x-4 p-4 relative rounded-md">
                                    <img src="images/avatars/placeholder.png" alt="" class="rounded-full shadow w-12 h-12">
                                    <div>
                                        <h4 class="text-base m-0 font-semibold"> Sael batuta</h4>
                                        <span class="text-gray-700 text-sm"> 14th, April 2021 </span>
                                        <p class="mt-3 md:ml-0 -ml-16">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ut laoreet dolore
                                            magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                            
                                <div class="bg-gray-50 border flex gap-x-4 p-4 relative rounded-md">
                                    <img src="images/avatars/placeholder.png" alt="" class="rounded-full shadow w-12 h-12">
                                    <div>
                                        <h4 class="text-base m-0 font-semibold"> Josué mbuyu</h4>
                                        <span class="text-gray-700 text-sm"> 16th, May 2021 </span>
                                        <p class="mt-3 md:ml-0 -ml-16">
                                            elit, sed diam ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim ipsum dolor sit
                                            amet, consectetuer adipiscing elit, sed diam ut laoreet dolore
                                        </p>
                                    </div>
                                </div>
                            
                            </div>

                            <div class="flex justify-center mt-9">
                                <a href="#" class="bg-gray-50 border hover:bg-gray-100 px-4 py-1.5 rounded-full text-sm">Plus de commentaires ..</a>
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
    name: "Course",
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