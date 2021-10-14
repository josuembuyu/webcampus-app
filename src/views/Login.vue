<template>
  <div id="wrapper" class="flex flex-col justify-between h-screen">
      <!-- header-->
      <div class="bg-white py-4 shadow dark:bg-gray-800">
          <div class="max-w-6xl mx-auto">
              <div class="flex items-center lg:justify-between justify-around">
                  <a href="index.html">
                      <img src="images/logo.png" alt="" class="w-32">
                  </a>
                  <div class="capitalize flex font-semibold hidden lg:block my-2 space-x-3 text-center text-sm">
                      <a href="#" class="py-3 px-4">Se connecter</a>
                      <a href="#" class="bg-purple-500 purple-500 px-6 py-3 rounded-md shadow text-white">Nous contacter</a>
                  </div>
              </div>
          </div>
      </div>

      <!-- Content-->
      <div>
        <div class="lg:p-12 max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
            <form autocomplete="off" class="lg:p-10 p-6 space-y-3 relative bg-white shadow-xl rounded-md">
                <h1 class="lg:text-2xl text-xl font-semibold mb-6"> Login </h1>
                <div>
                    <label class="mb-0" for="identifiant"> identifiant </label>
                    <input type="text" id="identifiant" placeholder="identifiant" class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full">
                </div>
                <div>
                    <label class="mb-0" for="password"> Mot de passe </label>
                    <input type="password" id="password" placeholder="******" class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full">
                </div>

                <div>
                    <button type="button" class="bg-blue-600 font-semibold p-2.5 mt-5 rounded-md text-center text-white w-full">
                        Se connecter</button>
                </div>

                <div class="uk-heading-line uk-text-center py-5"><span>Ou encore </span></div>
                <a href="http://demo.foxthemes.net/login/facebook" class="hidden relative lg:flex items-center justify-start w-full py-3 mt-2 overflow-hidden text-lg font-medium text-white bg-indigo-600 rounded-lg cursor-pointer">
                    <span class="inline-block pl-5 text-base text-center w-full">Mot de passe oublié</span>
                </a>
            </form>

        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
input , .bootstrap-select.btn-group button{
    background-color: #f3f4f6  !important;
    height: 44px  !important;
    box-shadow: none  !important; 
}

form{
    text-align: initial;
}
</style>