<template>
    <div>
        <div class="row mt-3">
            <div id="register" class="card col-lg-4 offset-lg-4 col-md-6 offset-md-3
                                  col-12">
                <form @submit.prevent="submit" class="p-3 rounded bg-light">
                    <div class="form-group-d-grid col-6 mx-auto mb-3">
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" class="form-control" v-model="user.name">
                    </div>

                    <div class="form-group-d-grid col-6 mx-auto mb-3">
                        <label for="email">Email:</label>
                        <input type="email" id="email" class="form-control" v-model="user.email">
                    </div>

                    <div class="form-group-d-grid col-6 mx-auto mb-3">
                        <label for="password">Contraseña:</label>
                        <input type="password" id="password" class="form-control" v-model="user.password">
                    </div>

                    <div class="form-group-d-grid col-6 mx-auto mb-3">
                        <label for="password_confirmation">Confirmar Contraseña:</label>
                        <input type="password" id="password_confirmation" class="form-control"
                            v-model="user.password_confirmation">
                    </div>
                    <div class="d-grid col-6 mx-auto mb-3">
                        <button type="submit" class="btn btn-primary">Registrarse</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        }
    },
    methods: {
        submit() {
            axios.post('/register', this.user)
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error.response.data)
                })
        }
    }
}
</script>