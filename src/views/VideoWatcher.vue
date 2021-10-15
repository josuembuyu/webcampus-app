<template>
    <!-- sidebar -->
    <div class="sidebar">
        
        <!-- slide_menu for mobile -->
        <span class="btn-close-mobi right-3 left-auto" uk-toggle="target: #wrapper ; cls: is-active"></span>

        <!-- back to home link -->
        <div class="flex justify-between lg:-ml-1 mt-1 mr-2">
            <router-link to="/videos" class="flex items-center text-blue-500">
                <ion-icon name="chevron-back-outline" class="md:text-lg text-2xl"></ion-icon>  
                <span class="text-sm md:inline hidden"> Retour</span>
            </router-link>
        </div>

        <!-- title -->
        <h1 class="lg:text-2xl text-lg font-bold mt-2 line-clamp-2"> Langage de programmation C# </h1>

        <!-- sidebar list -->
        <div class="sidebar_inner is-watch-2" data-simplebar>

            <div class="lg:inline hidden">
                <div class="relative overflow-hidden rounded-md bg-gray-200 h-1 mt-4">
                    <div class="w-2/4 h-full bg-green-500"></div>
                </div>
                <div class="mt-2 mb-3 text-sm border-b pb-3">
                    <div> 46% Complet</div>
                    <div> Dernière lecture Avril 20, 2021</div>
                </div>
            </div>

            <div id="curriculum"> 
                <div uk-accordion="multiple: true" class="divide-y space-y-3">

                    <div class="uk-open">
                        <a class="uk-accordion-title text-md mx-2 font-semibold" href="#">  <div class="mb-1 text-sm font-medium"> Section 1 </div> Html Introduction </a>
                        <div class="uk-accordion-content mt-3">
                            
                            <ul class="course-curriculum-list" uk-switcher="connect: #video_tabs; animation: animation: uk-animation-slide-right-small, uk-animation-slide-left-medium">
                                <li>
                                    <a href="#">
                                            Introduction <span class="hidden"> 4  min </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        What is HTML <span class="hidden"> 5  min </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        What is a Web page? <span class="hidden"> 8 min </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        
                                        Your First Web Page
                                        <span class="hidden"> 4 min </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        
                                        Brain Streak <span class="hidden"> 5 min </span>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div class="pt-2">
                        <a class="uk-accordion-title text-md mx-2 font-semibold" href="#"> <div class="mb-1 text-sm font-medium"> Section 2 </div> Your First webpage  </a>
                        <div class="uk-accordion-content mt-3">

                            <ul class="course-curriculum-list">
                                <li>
                                    <a href="#modal-example" uk-toggle>
                                            Headings
                                        <span> 4 min </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#modal-example" uk-toggle>
                                            Paragraphs
                                        <span> 5 min </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#modal-example" uk-toggle>
                                        Emphasis and Strong Tag
                                        <span> 8 min </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#modal-example" uk-toggle>
                                        Brain Streak
                                        <span> 4 min </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#modal-example" uk-toggle>
                                        Live Preview Feature
                                        <span> 5 min </span>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div class="pt-2">
                        <a class="uk-accordion-title text-md mx-2 font-semibold" href="#"> <div class="mb-1 text-sm font-medium"> Section 3 </div> Build Complete Webste  </a>
                        <div class="uk-accordion-content mt-3">

                            <ul class="course-curriculum-list font-medium">
                                <li>
                                    <a href="#">
                                            The paragraph tag
                                        <span class="hidden"> 4 min </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                            The break tag
                                        <span class="hidden"> 5 min </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Headings in HTML
                                        <span class="hidden"> 8 min </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Bold, Italics Underline
                                        <span class="hidden"> 4 min </span>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-5">
                <h3 class="mb-4 text-lg font-semibold"> Quizzes</h3>
                <ul>
                    <li><a href="#"> <ion-icon name="timer-outline" class="side-icon"></ion-icon>   Taking small eco-friendly steps </a></li> 
                    <li><a href="#"> <ion-icon name="timer-outline" class="side-icon"></ion-icon>   Making your house eco-friendly </a></li> 
                    <li><a href="#"> <ion-icon name="timer-outline" class="side-icon"></ion-icon>   Building and renovating for eco-friendly homes </a></li> 
                    <li><a href="#"> <ion-icon name="log-in-outline" class="side-icon"></ion-icon> Taking small eco-friendly  </a>
                        <ul>
                            <li><a href="#"> Making your house </a></li>
                            <li><a href="#"> Building and renovating </a></li>
                            <li><a href="#"> Taking small </a></li>
                        </ul>
                    </li> 
                </ul>

            </div>

        </div>

        <!-- overly for mobile -->
        <div class="side_overly" uk-toggle="target: #wrapper ; cls: is-collapse is-active"></div>
        
    </div> 

    <!-- Main Contents -->
    <div class="main_content">
        <div class="relative">
            <ul class="uk-switcher relative z-10" id="video_tabs">
                <li>
                    <!-- to autoplay video uk-video="automute: true" -->
                    <div class="embed-video">
                        <iframe src="https://www.youtube.com/embed/9gTw2EDkaDQ" frameborder="0"
                            uk-video="automute: true" allowfullscreen uk-responsive></iframe>
                    </div>

                </li>
                <li>
                    <div class="embed-video">
                        <iframe src="https://www.youtube.com/embed/dDn9uw7N9Xg" frameborder="0" allowfullscreen
                            uk-responsive></iframe>
                    </div>
                </li>
                <li>
                    <div class="embed-video">
                        <iframe src="https://www.youtube.com/embed/CGSdK7FI9MY" frameborder="0" allowfullscreen
                            uk-responsive></iframe>
                    </div>
                </li>
                <li>
                    <div class="embed-video">
                        <iframe src="https://www.youtube.com/embed/4I1WgJz_lmA" frameborder="0" allowfullscreen
                            uk-responsive></iframe>
                    </div>
                </li>
                <li>
                    <div class="embed-video">
                        <iframe src="https://www.youtube.com/embed/dDn9uw7N9Xg" frameborder="0" allowfullscreen
                            uk-responsive></iframe>
                    </div>
                </li>
                <li>
                    <div class="embed-video">
                        <iframe src="https://www.youtube.com/embed/CPcS4HtrUEU" frameborder="0" allowfullscreen
                            uk-responsive></iframe>
                    </div>
                </li>
            </ul>

            <div class="bg-gray-200 w-full h-full absolute inset-0 animate-pulse"></div>

        </div>

        <nav class="cd-secondary-nav border-b md:p-0 lg:px-6 bg-white " uk-sticky="cls-active:shadow-sm ; media: @s">
            <ul uk-switcher="connect: #course-tabs; animation: uk-animation-fade">
                <li><a href="#" class="lg:px-2">   Resumé </a></li>
            </ul>
        </nav>

        <div style="text-align: initial" class="container">
            <div class="max-w-2xl lg:py-6 mx-auto uk-switcher" id="course-tabs">
                <!--  Overview -->
                <div>
                    
                        <h4 class="text-2xl font-semibold"> Resumé </h4>
                    
                        <p> Langage de programmation C# </p>
                    
                        <hr class="my-5">
                    
                        <div class="grid lg:grid-cols-3 mt-8 gap-8">
                            <div>
                                <h3 class="text-lg font-semibold"> Description </h3>
                            </div>
                            <div class="col-span-2">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                    tincidunt ut
                                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim laoreet dolore magna
                                    aliquam erat
                                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                                    lobortis
                                    nisl ut aliquip ex ea commodo consequat
                    
                                    <br>
                                    <a href="#" class="text-blue-500">Read more .</a>
                                </p>
                            </div>
                    
                        </div>
                    
                    
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.sidebar{
    text-align: initial;
    padding: .6em;
}

/* .simplebar-content{
    padding-top: 30px !important;
} */
</style>