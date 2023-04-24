<script>
import axios from 'axios';
import { confirmar } from '../funciones.js'
export default {
  data() {
    return {
      buscador: '',
      estudiante: null,
      cargando: false,
    }
  },
  mounted() {
    this.getEstudiantes();
  },
  methods: {
    getEstudiantes() {
      this.cargando = true;
      let url = this.buscador == '' ? 'http://academicobackend.test/api/estudiantes/search' : 'http://academicobackend.test/api/estudiantes/search/' + this.buscador
      axios.get(url).then(
        res => {
          this.estudiantes = res.data;
          this.cargando = false;
        }
      );
    },
    eliminar(id, nombre) {
      confirmar('http://academicobackend.test/api/estudiantes/', id, 'Eliminar resgistro', 'Realmente desea eliminar a' + nombre + '?');
      this.cargando = false;
    }
  }
}









</script>

<template>
  <div class="row">
    <div class="col-lg-10 offset-lg-1 text-center">

      <div class="table-responsive">

        <div class="d-grid col-4 mx-auto mb-1 p-3">
          <input type="text" class="form-control " placeholder="Buscar al cliente" v-model="buscador" @input="buscar" />

        </div>

        <div class="input-gronp col-4 mx-auto mb-1 p-1">
          <button class="btn btn-outline-secondary  " type="button" @click="getEstudiantes">Buscar</button>
        </div>
        <table class="table table-bodered table-hover">
          <thead>
            <tr>

              <th>#</th>
              <th>
              <td>ID</td>
              </th>
              <th>
              <td>Foto</td>
              </th>
              <th>
              <td>Nombre</td>
              </th>
              <th>
              <td>Apellido</td>
              </th>
              <th>
              <td>Cedula</td>
              </th>
              <th>
              <td>Telefono</td>
              </th>
              <th style="white-space: nowrap;">
              <td>Tipo de mentoria</td>
              </th>
              <th>
              <td>Registro</td>
              </th>
              <th>
              <td>fecha de vencimiento</td>
              </th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-if="this.cargando">
              <td colspan="6">
                <h3>cargando...</h3>
              </td>

            </tr>
            <tr v-else v-for="est, i in estudiantes" :key="est.id">
              <td v-text="(i + 1)"> </td>
              <td v-text="est.id"> </td>
              <td>
                <img v-if="est.foto" style="width:100px !important;" :src="est.foto" class="img-thumbnail">
                <img v-else style="height:80px !important;"
                  src="https://cdn3.iconfinder.com/data/icons/leto-user-group/64/__man_user_person-512.png"
                  class="img-thumbnail">
              </td>
              <td v-text="est.nombre"> </td>
              <td v-text="est.apellido"></td>
              <td v-text="est.cedula"></td>
              <td v-text="est.telefono"></td>
              <td v-text="est.mentoria"></td>
              <td v-text="new Date(est.created_at).toLocaleDateString('en-US')"> </td>

              <td>
                <div class="d-grid col-9 mx-auto mb-3">
                  <!-- <label>Fecha de vencimiento:</label> -->
                  <input class="form-control" type="date" v-model="expirationDate" />
                </div>
              </td>

              <div class="d-flex col-4 offset-lg-2">
                <td>

                  <router-link :to="{ path: 'viewE/' + est.id }" class="col btn btn-primary">
                    <font-awesome-icon icon="fa-solid fa-eye" />
                  </router-link>


                  &nbsp;
                  <router-link :to="{ path: 'editE/' + est.id }" class="col btn btn-info">
                    <font-awesome-icon icon="fa-solid fa-pen" />
                  </router-link>
                  &nbsp;


                  <button class="col btn btn-danger" v-on:click="eliminar(est.id, est.nombre)">
                    <font-awesome-icon icon="fa-solid fa-trash" />
                  </button>
                </td>
              </div>








            </tr>
          </tbody>


        </table>

      </div>

    </div>

  </div>
</template>
<style></style>
