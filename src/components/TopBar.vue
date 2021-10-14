<template>
    <!--  Header  -->
    <header class="is-transparent is-dark border-b backdrop-filter backdrop-blur-2xl" uk-sticky="cls-inactive: is-dark is-transparent border-b"> 
        <div class="header_inner">
            <div class="left-side">

                <!-- Logo -->
                <div id="logo">
                    <a href="explore.html">
                        <img src="images/logo.png" alt="">
                        <img src="images/logo-light.png" class="logo_inverse" alt="">
                        <img src="images/logo-mobile.png" class="logo_mobile" alt="">
                    </a>
                </div>

                <!-- icon menu for mobile -->
                <div class="triger" uk-toggle="target: #wrapper ; cls: is-active">
                </div>

            </div>
            <div class="right-side">
    
                <!-- Header search box  -->
                <div class="header_search"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> 
                    <input value="" type="text" class="form-control" placeholder=" Faites une recherche.." autocomplete="off">
                </div>

                <div>
    
                    <!-- notification -->
                    <a href="#" class="header_widgets">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell is-icon"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                    </a>
                    <div uk-drop="mode: click" class="header_dropdown"> 
                        <div class="drop_headline">
                            <h4>Notifications </h4>
                            <div class="btn_action">
                                <div class="btn_action">
                                    <a href="#">
                                        <ion-icon name="settings-outline" uk-tooltip="title: Notifications settings ; pos: left"></ion-icon>
                                    </a>
                                    <a href="#">
                                        <ion-icon name="checkbox-outline" uk-tooltip="title: Mark as read all ; pos: left"></ion-icon>
                                    </a>
                                </div>
                            </div>
                        </div>
    
                        <ul class="dropdown_scrollbar" data-simplebar>
                            <li>
                                <a href="#">
                                    <div class="drop_avatar"> <img src="images/avatars/avatar-1.jpg" alt="">
                                    </div>
                                    <div class="drop_content">
                                        <p> <strong>Adrian Mohani</strong> Like Your Comment On Course
                                            <span class="text-link">Javascript Introduction </span>
                                        </p>
                                        <span class="time-ago"> 2 hours ago </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="drop_avatar"> <img src="images/avatars/avatar-2.jpg" alt="">
                                    </div>
                                    <div class="drop_content">
                                        <p>
                                            <strong>Stella Johnson</strong> Replay Your Comments in
                                            <span class="text-link">Programming for Games</span>
                                        </p>
                                        <span class="time-ago"> 9 hours ago </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="drop_avatar"> <img src="images/avatars/avatar-3.jpg" alt="">
                                    </div>
                                    <div class="drop_content">
                                        <p>
                                            <strong>Alex Dolgove</strong> Added New Review In Course
                                            <span class="text-link">Full Stack PHP Developer</span>
                                        </p>
                                        <span class="time-ago"> 12 hours ago </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="drop_avatar"> <img src="images/avatars/avatar-1.jpg" alt="">
                                    </div>
                                    <div class="drop_content">
                                        <p>
                                            <strong>Jonathan Madano</strong> Shared Your Discussion On Course
                                            <span class="text-link">Css Flex Box </span>
                                        </p>
                                        <span class="time-ago"> Yesterday </span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <a href="#" class="see-all">See all</a>
                    </div>
    
                    <!-- profile -->
                    <a href="#">
                        <img src="images/avatars/placeholder.png" class="header_widgets_avatar" alt="">
                    </a>
                    <div uk-drop="mode: click;offset:5" class="header_dropdown profile_dropdown">
                        <ul>   
                            <li>
                                <a href="#" class="user">
                                    <div class="user_avatar">
                                        <img src="images/avatars/placeholder.png" alt="">
                                    </div>
                                    <div class="user_name">
                                        <div> Josuémbuyu </div>
                                        <span> @josh </span>
                                    </div>
                                </a>
                            </li>
                            <li> 
                                <hr>
                            </li>
                            <li> 
                                <a href="#">
                                    Mon compte
                                </a>
                            </li>
                            <li> 
                                <a href="#">
                                    Se deconnecter
                                </a>
                            </li>
                        </ul>
                    </div> 

                </div>

            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "TopBar"
}
</script>

<style>

</style>