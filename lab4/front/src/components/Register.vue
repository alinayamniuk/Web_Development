<template>
    <div class="form">
        <div class="container-form">
            <div>
                <div class="order">
                    <h1>Sign up</h1>
                    <i class="fas fa-user"></i>
                </div>
<!--                <p class="error"><i class="fas fa-times"></i> Wrong input</p>-->
                <div class="error-div">
                    <div class="near">
                        <input v-model="lname" type="text" placeholder="Last name" class="near-input">
                        <input v-model="fname" type="text" placeholder="First name" class="near-input">
                    </div>
                    <span>{{name_error}}</span>
                </div>
                <div class="another">
                    <input v-model="username" type="text" placeholder="Username">
                    <span>{{username_error}}</span>
                    <input v-model="email" type="email" placeholder="Email" autocomplete="off">
                    <span>{{email_error}}</span>
                    <input v-model="password" type="password" placeholder="Password">
                    <span>{{password_error}}</span>
                    <input v-model="c_password" type="password" placeholder="Confirm password">
                    <span>{{c_password_error}}</span>
                </div>
                <div class="btns">
                    <button v-on:click="submit()">Register</button>
                    <router-link :to="{name: 'Login'}" class="have_acc">Have an account?</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import qs from 'qs'

    export default {
        name: "Register",
        data() {
            return {
                username: '',
                password: '',
                c_password: '',
                email: '',
                fname: '',
                lname: '',
                username_error: '',
                password_error: '',
                c_password_error: '',
                email_error: '',
                name_error: '',
                error: '',
            }
        },
        methods: {
            clear_errors() {
                this.username_error = '';
                this.password_error = '';
                this.c_password_error = '';
                this.email_error = '';
                this.email_error = '';
                this.name_error = '';
                this.error = ''
            },
            validate() {
                this.clear_errors();
                let is_valid = true;
                const username_validator = new RegExp('^[\\w]+$');
                const email_validator = new RegExp('.+@.+\\..+');
                const name_validator = new RegExp('^([a-zA-Z]+)([a-zA-Z ]+)([a-zA-Z]+)$');
                if (this.username.length < 3 || !this.username.match(username_validator) || this.username.length > 20) {
                    this.username_error = 'Username must be from 3 to 20 characters long and contain only letters,' +
                        ' digits and _';
                    is_valid = false;
                }
                if (!this.email.match(email_validator)) {
                    this.email_error = 'Please, enter valid email';
                    is_valid = false;
                }
                console.log(this.fname)
                console.log(this.fname.match(name_validator))
                if (!(this.fname.match(name_validator) && this.lname.match(name_validator))) {
                    this.name_error = 'Your name must contain only letters and spaces';
                    is_valid = false;
                }
                if (this.password.length < 6 || this.password.length > 30) {
                    this.password_error = 'Password must be 6 to 30 characters long';
                    is_valid = false;
                }
                if (this.password !== this.c_password) {
                    this.c_password_error = 'Passwords don\'t match';
                    is_valid = false;
                }
                return is_valid;
            },
            submit() {
                if (!this.validate()) {
                    return;
                }
                this.$api.post('auth/register/', qs.stringify({
                    username: this.username,
                    password: this.password,
                    email: this.email,
                    fname: this.fname,
                    lname: this.lname,
                }), {
                    headers:{
                        "Content-type": "application/x-www-form-urlencoded"
                    }
                }).then(response => {
                    if (response.data.response === 'EMAIL_TAKEN') {
                        this.email_error = ['Email is already taken'];
                    } else if (response.data.response === 'USERNAME_TAKEN') {
                        this.name_error = ['Username is already taken'];
                    } else if (response.data.response === 'OK') {
                        this.$router.push({name: 'Main'})
                    } else {
                        this.error = 'Unexpected error happened. Please contact us or try again later'
                    }
                }).catch(e => {
                    console.log(e);
                    this.error = 'Unexpected error happened. Please contact us or try again later'
                });
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
    .container-form .near {
        display: flex;
        flex-direction: row;
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

    .error-div{
        display: flex;
        flex-direction: column;
    }

    div span{
        color: #ee4242;
        font-size: 12px;
        text-align: center;
        max-width: 300px;
    }

    .error i{
        position: relative;
        top: 1px;
        font-size: 20px;
    }
    @media only screen and (max-width: 800px) {
        .container-form {
            border: none;
        }
    }
</style>