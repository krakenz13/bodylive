<script>

import { mostrarAlerta, enviarSolicitud } from '../funciones.js'


export default {
    data() {
        return {
            nombre:'',
            apellido:'',
            foto:'',
            cedula:'',
            telefono: '',
            mentoria: '',
            url:'http://academicobackend.test/api/estudiantes',
            cargando: false
        }
    },

    methods: {
        guardar(){
            event.preventDefault()
            var miFoto = document.getElementById("fotoimg");
            this.foto = miFoto.src;


            if(this.nombre.trim()===''){
                mostrarAlerta('ingrese un nombre','warning','nombre');
            }else if(this.apellido.trim()===''){
                mostrarAlerta('ingrese un apellido','warning','apellido');
            }else{
                var parametros = {
                    nombre:this.nombre.trim(),
                    apellido:this.apellido.trim(),
                    foto:this.foto.trim(),
                    cedula:this.cedula.trim(),
                    telefono:this.telefono.trim(),
                    mentoria:this.mentoria.trim()
                }
                enviarSolicitud('POST',parametros,this.url, 'Estudiante registrado!!!');

            }
            

        },
        previsualizarFoto(event){
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload =function(){
                var miFoto = document.getElementById("fotoimg");
                miFoto.src = reader.result;
                this.foto = miFoto.src;

            }
            
        }
    }
}









</script>

<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">
                    Resgistrar estudiante
                </div>
                <div class="card-body">
                    <form v-on:submit="guardar">
                        <div class=" d-grid col-6 mx-auto mb-3">
                            <img v-if="this.foto" height="100" :src="this.foto" id="fotoimg" class="img-thumbnail" alt="">
                            <img v-else height="100" src="https://cdn3.iconfinder.com/data/icons/leto-user-group/64/__man_user_person-512.png"
                                class="img-thumbnail" id="fotoimg" >


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
                            <span class="input-group-text"><font-awesome-icon icon="fa-solid fa-address-card" /></span>
                            <input type="text" v-model="cedula" id="cedula" placeholder="ingrese la cedula" required
                                maxlength="50" class="form-control">


                        </div>
                        <div class=" input-group mb-3">
                            <span class="input-group-text"><font-awesome-icon icon="fa-solid fa-phone" /></span>
                            <input type="text" v-model="telefono" id="telefono" placeholder="ingrese el telefono" required
                                maxlength="50" class="form-control">


                        </div>
                        <div class=" input-group mb-3">
                            <span class="input-group-text"><font-awesome-icon icon="fa-solid fa-dumbbell" /></span>
                            <input type="text" v-model="mentoria" id="mentoria" placeholder="ingrese tipo mentoria" required
                                maxlength="50" class="form-control">


                        </div>

                        <div class=" input-group mb-3">
                            <span class="input-group-text"><font-awesome-icon icon="fa-solid fa-camera" /></span>
                            <input v-on:change="previsualizarFoto" type="file"  accept="image/png, image/jpeg, image/gif"  class="form-control" >


                        </div>

                        <div class=" d-grid col-6 mx-auto mb-3">
                            <button class="btn btn-secondary"><font-awesome-icon icon="fa-solid fa-floppy-disk"/> Registrar</button>

  


                        </div>

                    </form>

                </div>

            </div>
        </div>

    </div>
</template>