<script>

import { mostrarAlerta, enviarSolicitud, HttpClient } from '../funciones.js'
import { useRoute } from 'vue-router';
import axios from 'axios';


export default {
    data() {
        return {
            id: 0,
            nombre: '',
            apellido: '',
            foto: '',
            url: 'http://academicobackend.test/api/estudiantes',
            cargando: true
        }
    },
    mounted() {
        
        const route = useRoute();
        this.id = route.params.id;
        this.url += '/' + this.id;
        this.getEstudiante();


    },
    methods: {
        getEstudiante() {
            console.log(this.url)

            
            const httpClient = new HttpClient()

            httpClient.get(this.url).then(
                res => {
                    this.nombre = res.data.data.nombre;
                    this.apellido = res.data.data.apellido;
                    this.foto = res.data.data.foto;
                    this.cedula = res.data.data.cedula;
                    this.telefono = res.data.data.telefono;
                    this.mentoria = res.data.data.mentoria;
                    this.cargando = false;
                }
            );
            // axios.get(this.url).then(
            //     res => {
            //         this.nombre = res.data.data.nombre;
            //         this.apellido = res.data.data.apellido;
            //         this.foto = res.data.data.foto;
            //         this.cedula = res.data.data.cedula;
            //         this.telefono = res.data.data.telefono;
            //         this.mentoria = res.data.data.mentoria;
            //         this.cargando = false;
            //     }
            // );
        },
        actualizar() {
            event.preventDefault()
            var miFoto = document.getElementById("fotoimg");
            this.foto = miFoto.src;


            if (this.nombre.trim() === '') {
                mostrarAlerta('ingrese un nombre', 'warning', 'nombre');
            } else if (this.apellido.trim() === '') {
                mostrarAlerta('ingrese un apellido', 'warning', 'apellido');
            } else {
                var parametros = { nombre: this.nombre.trim(), apellido: this.apellido.trim(), foto: this.foto.trim() }
                enviarSolicitud('PUT', parametros, this.url, 'Estudiante actualizado!!!');

            }


        },
        previsualizarFoto(event) {
            const reader = new FileReader();
            const file = event.target.files[0];

            reader.onload = e => {
                var miFoto = document.getElementById("fotoimg");
                miFoto.src = e.target.result;
                this.foto = miFoto.src;
                // e.target.onloadstart(e, this.cargando = true)
                e.target.onloadend(e, this.cargando = false)
            }
            reader.readAsDataURL(event.target.files[0]);

        }
    }
}









</script>

<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">
                    Detalle del  estudiante
                </div>
                <div class="card-body">
                    <div class=" d-grid col-6 mx-auto mb-3">
                        <router-link :to="{path:'/'}" class="btn btn-secondary">
                            <font-awesome-icon icon="fa-solid fa-arrow-left" />Regresa ala lista
                        </router-link>
                    </div>    
                    <div v-if="this.cargando" class="text-center">
                        <div class="spinner-border mb-3 " style="width: 3rem; height: 3rem;" role="status">
                        </div>
                        <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
                        </div>
                    </div>
                    <form v-on:submit="actualizar" v-else>
                        <div class=" d-grid col-6 mx-auto mb-3">
                            <img v-if="this.foto" height="100" :src="this.foto" id="fotoimg" class="img-thumbnail" alt="">
                            <img v-else height="100"
                                src="https://cdn3.iconfinder.com/data/icons/leto-user-group/64/__man_user_person-512.png"
                                class="img-thumbnail" id="fotoimg">


                        </div>

                        <div class=" input-group mb-3">
                            <span class="input-group-text"><font-awesome-icon icon="fa-solid fa-user" /></span>
                            <label type="text" v-text="nombre" class="form-control"></label>


                        </div>

                        <div class=" input-group mb-3">
                            <span class="input-group-text"><font-awesome-icon icon="fa-solid fa-user" /></span>
                            <label type="text" v-text="apellido" class="form-control"></label>


                        </div>
                        <div class=" input-group mb-3">
                            <span class="input-group-text"><font-awesome-icon icon="fa-solid fa-address-card" /></span>
                            <label type="text" v-text="cedula" class="form-control"></label>


                        </div>
                        <div class=" input-group mb-3">
                            <span class="input-group-text"><font-awesome-icon icon="fa-solid fa-phone" /></span>
                            <label type="text" v-text="telefono" class="form-control"></label>


                        </div>
                        <div class=" input-group mb-3">
                            <span class="input-group-text"><font-awesome-icon icon="fa-solid fa-dumbbell" /></span>
                            <label type="text" v-text="mentoria" class="form-control"></label>


                        </div>








                    </form>

                </div>

            </div>
        </div>

    </div>
</template>