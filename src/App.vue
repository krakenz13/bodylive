<script>
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark p-3">
    <div class="container-fluid">
      <img class="logo" src="./components/img/logo.jpg" alt="">
      <a class="navbar-brand" href="#">APP Registro</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink :to="{ path: '/' }" class="nav-link active" aria-current="page"> Inicio</RouterLink>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Clientes
            </a>
            <ul class="dropdown-menu">

              <li>
                <RouterLink class="dropdown-item" to="/">listar Clientes</RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/createE">Registro <del></del> Cliente</RouterLink>
              </li>
           
              <li>
                <RouterLink :to="{ path: '/fechaE' }" class="dropdown-item" aria-current="page"> menbresias vencidas</RouterLink>

              </li>


            </ul>
          </li>

        </ul>

        <div>
        </div>
      </div>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-1 mb-lg-0 p-2 ">
          <li class="nav-item ">
            <RouterLink :to="{ path: '/registerE' }" class="nav-link active" aria-current="page"><font-awesome-icon icon="fa-solid fa-user" /></RouterLink>
          </li>
        </ul>
    </div>
    <div class="collapse navbar-collapse"  id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-1 mb-lg-0 p-2">
        <li class="nav-item ">
                <RouterLink :to="{ path: '/loginE' }" class="dropdown-item" aria-current="page"><font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" /></RouterLink>

        </li>
      </ul>
    </div>



  </nav>
  <RouterView />
</template>
<style>
.navbar {
  background-color: rgb(155, 155, 155);

}

.logo {
  width: 300px;
  border-radius: 100px;
  padding: 3px;

}

.btn:hover {
  background-color: black;


}

</style>

