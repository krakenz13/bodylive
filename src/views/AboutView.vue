<template>
  <main role="main" class="container my-auto">
    <div class="row mt-3">
      <div id="login" class="card col-lg-4 offset-lg-4 col-md-6 offset-md-3
                            col-12">
        <h2 class="text-center">inicia sesión</h2>
        <img class="img-fluid rounded-circle mx-auto d-block rounded" width="150" src="../views/img/logokraken.png" />

        <form v-on:submit.prevent="login">
          <div class="form-group-d-grid col-6 mx-auto mb-3">
            <label for="correo">usuario</label>
            <input v-model="usuario" id="login" name="correo" class="form-control" type="email"
              placeholder="Correo electrónico">
          </div>
          <div class="form-group-d-grid col-6 mx-auto mb-3">
            <label for="palabraSecreta">ingresa tu clave</label>
            <input v-model="password" id="login" class="form-control" type="password"
              placeholder="Contraseña">
          </div>
          <div class=" d-grid col-6 mx-auto mb-3">
            <button type="submit" class="btn btn-primary ">
              ingresar
            </button>
          </div>
          <br>

        </form>
      </div>
    </div>
  </main>
</template>

<script>


import axios from 'axios';
import { mostrarAlerta, enviarSolicitud } from '../funciones.js'


export default {
  data() {
    return {
      usuario: "",
      password: "",
      url: 'http://academicobackend.test/api/login',
      error: true
    };

  },
  methods:{
    login(){
      let json = {
        "usario" : this.usuario,
        "password" :this.password
       
        
      };
      axios.post(this.url)
      .then(data =>{
        console.log(data);
        
        

      });
      if (this.usuario.trim() === '') {
                mostrarAlerta('ingrese un usuario', 'warning', 'usuario');
            } else if (this.password.trim() === '') {
                mostrarAlerta('ingrese una contraseña', 'warning', 'contraseña');
            } else {
                var parametros = { ususario: this.usuario.trim(),password: this.password.trim()}
                enviarSolicitud('POST', parametros, this.url, 'iniciando sesión!!!');
              
            };
    }
  }
}

   
</script>




cd