<template>
    <div class="form">
        <div class="container-form">
            <div>
                <div class="order pos_login">
                    <h1>Sign in</h1>
                    <i class="fas fa-user"></i>
                </div>
                <div class="another">
                    <input v-model="username" type="text" placeholder="Username">
                    <input v-model="username" type="password" placeholder="Password">
                    <span>{{error}}</span>
                </div>
                <div class="btns">
                    <button v-on:click="login()" class="login">Login</button>
                    <router-link :to="{name: 'Register'}" class="have_acc dont_have">Register</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                username:'',
                password: '',
                error: ''
            }
        },
        methods: {
            login() {
                if (!this.username || !this.password) {
                    this.error = 'Please, fill both fields!';
                    return;
                }
                this.$store.dispatch('obtainToken', {username: this.username, password: this.password})
                    .then(() => {
                        this.$router.push({name: 'Main'})
                    })
                    .catch(e => {
                        this.error = 'Please, check your credentials and try again!';
                        console.log(e);
                    })
            }
        }
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }

    body, html {
        margin: 0;
        padding: 0;
        height: 100%;
        font-family: "Montserrat", sans-serif;
        background-color: #F2F3EB;
    }

    .form {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container-form {
        height: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: none;
        width: 40%;
        border: 2px solid #474544;
    }

    .container-form .another {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .container-form .another input {
        color: #474544;
        border: none;
        border-bottom: 2px solid #474544;
        font-family: "Montserrat", sans-serif;
        outline: none;
        background: none;
        width: 313px;
        padding: 10px;
        margin: 5px;
    }
    .container-form .near input {
        color: #474544;
        border: none;
        border-bottom: 2px solid #474544;
        font-family: "Montserrat", sans-serif;
        outline: none;
        background: none;
        padding: 10px;
        margin: 5px;
        width: 150px;
    }
    .container-form button {
        cursor: pointer;
        color: #474544;
        font-family: "Montserrat", sans-serif;
        outline: none;
        background: none;
        padding: 10px;
        margin: 25px 5px;
        width: 150px;
        border: 2px solid #474544;
        transition: 0.3s;
    }
    .container-form button:hover {
        color: #F2F3EB;
        background-color: #474544;
    }
    .container-form .order {
        margin-top: 5%;
        margin-bottom: 5%;
        text-align: center;
    }

    .container-form .order h1 {
        letter-spacing: 7px;
        color: #474544;
        text-transform: uppercase;
    }
    .container-form .order i {
        color: #474544;
        font-size: 25px;
        margin: 5px 15px;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    ::placeholder {
        color: #474544;
    }

    .have_acc{
        text-decoration: none;
        color: #474544;
        font-size: 14px;
        text-align: right;
        padding-left: 20px;
    }

    .have_acc:hover {
        opacity: 0.5;
    }

    .dont_have{
        padding-left: 40px;
    }
    div span{
        color: #ee4242;
        font-size: 12px;
        text-align: center;
        max-width: 300px;
    }
    @media only screen and (max-width: 800px) {
        .container-form {
            border: none;
        }
    }
</style>