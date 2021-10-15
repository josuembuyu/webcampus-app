<template>
  <div id="wrapper" class="is-verticle">
        <top-bar />

        <div class="main_content">
            <div class="container">
                <div class="md:flex justify-between items-center mb-8">
                    <div>
                        <div class="text-xl font-semibold"> Mes travaux pratiques</div>
                        <div class="text-sm mt-2 font-medium text-gray-500 leading-6">  La liste de tout vos travaux pratique</div>
                    </div>
                </div>

                <!--   Courselist  -->
                <div class="tube-card mt-3 lg:mx-0 -mx-5">
                    <h4 class="py-3 px-5 border-b font-semibold text-grey-700"> <ion-icon name="star"></ion-icon> Travaux pratiques </h4>
                    <div class="divide-y">
                        <div class="md:p-5 p-2 relative">
                            <div class="flex flex-col text-left">
                                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table class="w-full divide-y divide-gray-200">
                                            <thead class="bg-gray-50">
                                                <tr>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Enseignant
                                                </th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Cours
                                                </th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Status
                                                </th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Action
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200">
                                                <tr>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <div class="flex items-center">
                                                        <div class="flex-shrink-0 h-10 w-10">
                                                            <img class="h-10 w-10 rounded-full"
                                                            src="images/avatars/placeholder.png"
                                                            alt="">
                                                        </div>
                                                        <div class="ml-4">
                                                            <div class="text-sm font-medium text-gray-900">
                                                            Benjamin HYANGANGA
                                                            </div>
                                                            <div class="text-sm text-gray-500">
                                                            assben@gmail.com
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <div class="text-sm text-gray-900">Seminaire Informatique</div>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-pink-100 text-pink-800">
                                                        En attente de depot
                                                        </span>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <a href="#modal-sections" uk-toggle class="bg-opacity-90 bg-green-600 p-2.5 text-white rounded-md text-base text-center w-32">Deposer</a> 
                                                        <div id="modal-sections" uk-modal>
                                                            <div class="uk-modal-dialog">
                                                                <button class="uk-modal-close-default m-3" type="button" uk-close></button>
                                                                <div class="uk-modal-header">
                                                                    <h2 class="uk-modal-title">Deposer votre travail</h2>
                                                                </div>
                                                                <div class="uk-modal-body">
                                                                    <div>
                                                                        <label class="mb-2" for="identifiant"> Attacher un fichier </label>
                                                                        <label
                                                                            class="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-purple-600 text-purple-600 ease-linear transition-all duration-150">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload-cloud"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
                                                                            <span class="mt-2 text-base text-purple-600 leading-normal">Selectionnez un fichier</span>
                                                                            <input type='file' class="hidden" />
                                                                        </label>
                                                                    </div>
                                                                    <div>
                                                                        <label class="mb-2 mt-4" for="identifiant"> Commentaire </label>
                                                                        <textarea class="uk-textarea p-4" rows="5" placeholder="Ajouter un commentaire"></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="uk-modal-footer text-right">
                                                                    <button class="button gray uk-modal-close" type="button">Annuler</button>&nbsp;
                                                                    <button class="button" type="button">Envoyer</button>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <div class="flex items-center">
                                                        <div class="flex-shrink-0 h-10 w-10">
                                                            <img class="h-10 w-10 rounded-full"
                                                            src="images/avatars/placeholder.png"
                                                            alt="">
                                                        </div>
                                                        <div class="ml-4">
                                                            <div class="text-sm font-medium text-gray-900">
                                                            Emmanuel MATONDO
                                                            </div>
                                                            <div class="text-sm text-gray-500">
                                                            emmanuelmatondo@gmail.com
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <div class="text-sm text-gray-900">Reseaux Informatiques</div>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-pink-100 text-pink-800">
                                                        En attente de depot
                                                        </span>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <a href="#" class="bg-opacity-90 bg-green-600 p-2.5 text-white rounded-md text-base text-center w-32">Deposer</a> 
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>
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
    name: "WorkList",
    components: {
        TopBar,
        Sidebar
    }
}
</script>

<style>
input , textarea{
    background-color: #f3f4f6  !important;
    height: 44px  !important;
    box-shadow: none  !important; 
}
</style>