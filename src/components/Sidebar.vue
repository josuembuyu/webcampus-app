<template>
    <div class="sidebar">
        <div class="sidebar_inner" data-simplebar>
            
            <ul class="side-colored">
                <li class="active"><a href="explore.html">
                        <ion-icon name="compass" class="bg-gradient-to-br from-purple-300 p-1 rounded-md side-icon text-opacity-80 text-white to-blue-500">
                        </ion-icon>
                        <span> Tableau de bord</span>
                    </a>
                </li>
                <li><a href="courses.html">
                        <ion-icon name="play-circle" class="bg-gradient-to-br from-yellow-300 p-1 rounded-md side-icon text-opacity-80 text-white to-red-500">
                        </ion-icon>
                        <span> Mes cours</span>
                    </a>
                </li>
                <li><a href="categories.html">
                        <ion-icon name="albums"  class="bg-gradient-to-br from-green-300 p-1 rounded-md side-icon text-opacity-80 text-white to-green-500">
                        </ion-icon>
                        <span> Mes travaux </span>
                    </a>
                </li>
                <li><a href="episodes.html">
                        <ion-icon name="film" class="bg-gradient-to-br from-pink-300 p-1 rounded-md side-icon text-opacity-80 text-white to-red-500">
                        </ion-icon>
                        <span> Ressources </span>
                    </a>
                </li>
                <li><a href="books.html">
                        <ion-icon name="book" class="bg-gradient-to-br from-yellow-300 p-1 rounded-md side-icon text-opacity-80 text-white to-red-500">
                        </ion-icon>
                        <span> Vidéos </span>
                    </a>
                </li>
                <li><a href="blogs.html">
                        <ion-icon name="newspaper" class="bg-gradient-to-br from-purple-300 p-1 rounded-md side-icon text-opacity-80 text-white to-blue-500">
                        </ion-icon>
                        <span> Horaire</span>
                    </a>
                </li>
            </ul>

            <ul class="side_links" data-sub-title="Paramètres">
                <li><a href="#"> Mon compte  </a></li>
                <li><a href="#"> Aide </a></li>
                <li><a href="#"> Foire aux questions </a></li>
                <li><a href="#"> Forum <span class="soon">Bientôt</span> </a></li>
                <li><a href="#"> Termes & conditions</a></li>
                <li><a href="#"> Politique de confidentialité </a></li> 
            </ul>

        </div>

        <div class="side_overly" uk-toggle="target: #wrapper ; cls: is-collapse is-active"></div>
    </div>
</template>

<script>
export default {
    name: "sidebar"
}
</script>

<style>

</style>