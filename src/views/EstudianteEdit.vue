<script>
import { mostrarAlerta, enviarSolicitud } from '../funciones.js'
import { useRoute } from 'vue-router';
import axios from 'axios';


export default {
    data() {
        return {
            id: 1,
            nombre: '',
            apellido: '',
            foto: '',
            cedula: '',
            telefono: '',
            mentoria: '',
            created_at:'',
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
            axios.get(this.url).then(
                

                res => {
                    this.nombre = res.data.data.nombre;
                    this.apellido = res.data.data.apellido;
                    this.foto = res.data.data.foto;
                    this.cedula = res.data.data.cedula;
                    this.telefono = res.data.data.telefono;
                    this.mentoria = res.data.data.mentoria;
                    this.created_at = res.data.data.created_at;

                    this.cargando = false;
                }
            );
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
                var parametros ={
                    nombre: this.nombre.trim(),
                    apellido: this.apellido.trim(),
                    foto: this.foto.trim(),
                    cedula:this.cedula.trim(),
                    telefono:this.telefono.trim(),
                    mentoria:this.mentoria.trim(),
                    created_at:this.created_at.trim(),
                  
                }
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
                    Editar estudiante
                </div>
                <div class="card-body">
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
                            <input type="text" v-model="nombre" id="nombre" placeholder="ingrese su nombre" required
                                maxlength="50" class="form-control">


                        </div>

                        <div class=" input-group mb-3">
                            <span class="input-group-text"><font-awesome-icon icon="fa-solid fa-user" /></span>
                            <input type="text" v-model="apellido" id="apellido" placeholder="ingrese su apellido" required
                                maxlength="50" class="form-control">


                        </div>
                        <div class=" input-group mb-3">
                            <span class="input-group-text"><font-awesome-icon icon="fa-address-card" /></span>
                            <input type="text" v-model="cedula" id="cedula" placeholder="ingrese el  documento" required
                                maxlength="50" class="form-control">


                        </div>
                        <div class=" input-group mb-3">
                            <span class="input-group-text"><font-awesome-icon icon="fa-solid fa-phone" /></span>
                            <input type="text" v-model="telefono" id="telefono" placeholder="ingrese el telefono" required
                                maxlength="50" class="form-control">


                        </div>
                        <div class=" input-group mb-3">
                            <span class="input-group-text"><font-awesome-icon icon="fa-solid fa-dumbbell" /></span>
                            <input type="text" v-model="mentoria" id="mentoria" placeholder="ingrese tipo de mentoria"
                                required maxlength="50" class="form-control">


                        </div>
                        <div class=" input-group mb-3">
                            <span class="input-group-text"><font-awesome-icon icon="fa-solid fa-dumbbell" /></span>
                            <input type="text" v-model="created_at" id="created_at" placeholder="actualice la fecha"
                                required maxlength="50" class="form-control">


                        </div>

                        <div class=" input-group mb-3">
                            <span class="input-group-text"><font-awesome-icon icon="fa-solid fa-camera" /></span>
                            <input v-on:change="previsualizarFoto" type="file" accept="image/png, image/jpeg, image/gif"
                                class="form-control">


                        </div>

                        <div class=" d-grid col-6 mx-auto mb-3">
                            <button class="btn btn-secondary "><font-awesome-icon icon="fa-solid fa-rotate" />
                                actualizar Estudiante</button>
                        </div>






                    </form>

                </div>

            </div>
        </div>

    </div>
</template>
