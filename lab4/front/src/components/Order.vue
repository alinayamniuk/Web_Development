<template>
    <div class="form">
        <div class="container-form">
            <form id="order-form">
                <div class="order">
                    <h1>Your order</h1>
                    <i class="money fas fa-money-check-alt"></i>
                </div>
                <div class="near">
                    <input v-model="fname" id="fname" name="fname" type="text" placeholder="First name" class="near-input">
                    <input v-model="lname" id="lname" name="lname" type="text" placeholder="Last name" class="near-input">
                </div>
                <div class="another">
                    <input id="checkdatefield" type="date" style="display: none">
                    <input v-model="phone" id="phone" name="phone" placeholder="Phone" autocomplete="off">
                    <input v-model="date" id ="datefield" type="date" name="date" placeholder="Date" min='2020-05-01'
                           v-on:blur="availableMasters()">
                    <select v-model="service" class="select-custom" id="service" name="service">
                        <option value="0" disabled selected hidden>Service</option>
                        <option value="1">Макіяж</option>
                        <option value="2">Зачіска</option>
                        <option value="3">Манікюр</option>
                    </select>
                    <select v-model="master" class="select-custom" v-bind:disabled="!available_masters"
                            id="master" name="master" v-on:change="availableHours()">
                        <option value="0" disabled selected hidden>Master</option>
                        <option v-for="master in available_masters" :value="master.id" :key="master.id">
                            {{master.first_name + ' ' + master.last_name}}
                        </option>
                    </select>
                    <select v-model="time" class="select-custom" id="time" name="time" v-bind:disabled="!available_hours">
                        <option value="0" disabled selected hidden>Time</option>
                        <option v-for="hour in available_hours" :value="hour" :key="hour">{{hour}}</option>
                    </select>
<!--                    <input v-model="price" id="price" name="price" type="text" readonly hidden>-->
                </div>
                <button type="button" value="Send" v-on:click="tryConfirm()">Send</button>
            </form>
        </div>
        <div class="confirm-order">
            <h1>Confirm order</h1>
                <p id="master_confirm">Master: </p>
                <p id="service_confirm">Service: </p>
                <p id="price_confirm">Price: {{price}}</p>
                <p id="date_confirm">Date: </p>
                <p id="time_confirm">Time: </p>
            <div class="buttons">
                <router-link :to="{name: 'Main'}">
                    <button v-on:click="postSubmit()">Confirm</button>
                </router-link>
                <button>Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import qs from 'qs'
    import {mapState} from 'vuex'

    export default {
        name: "Order",
        data() {
            return {
                available_masters: null,
                available_hours: null,
                price: null,
                fname: null,
                lname: null,
                phone: null,
                date: null,
                service: 0,
                master: 0,
                time: 0,
            }
        },
        computed: mapState(['user']),
        mounted() {
            let today = new Date();
            let dd = today.getDate();
            let mm = today.getMonth() + 1; //January is 0!
            let yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd
            }
            if (mm < 10) {
                mm = '0' + mm
            }
            today = yyyy + '-' + mm + '-' + dd;
            document.getElementById("datefield").setAttribute("min", today);
            document.getElementById('checkdatefield').value = document.getElementById('datefield').value;

            this.getName();
        },
        methods: {
            getText(id) {
                const sel = document.getElementById(id);
                return sel.options[sel.selectedIndex].text;
            },
            tryConfirm() {
                document.getElementById('fname').style.borderBottomColor = 'black';
                document.getElementById('lname').style.borderBottomColor = 'black';
                document.getElementById('phone').style.borderBottomColor = 'black';
                document.getElementById('datefield').style.borderBottomColor = 'black';
                document.getElementById('master').style.borderBottomColor = 'black';
                document.getElementById('service').style.borderBottomColor = 'black';
                document.getElementById('time').style.borderBottomColor = 'black';
                let field = document.getElementById('fname');
                const first_name = field.value;
                let check = false;
                if (first_name === '') {
                    field.style.borderBottomColor = 'indianred';
                    check = true;
                }
                field = document.getElementById('lname');
                const last_name = field.value;
                if (last_name === '') {
                    field.style.borderBottomColor = 'indianred';
                    check = true;
                }
                field = document.getElementById('phone');
                const phone = field.value;
                if (phone === '') {
                    field.style.borderBottomColor = 'indianred';
                    check = true;
                }
                field = document.getElementById('datefield');
                const date = field.value;
                if (date === '0000-00-00' || date === '') {
                    field.style.borderBottomColor = 'indianred';
                    check = true;
                }
                field = document.getElementById('service');
                const service = field.value;
                if (service === '0') {
                    field.style.borderBottomColor = 'indianred';
                    check = true;
                }
                field = document.getElementById('master');
                const master = field.value;
                if (master === '0') {
                    field.style.borderBottomColor = 'indianred';
                    check = true;
                }
                field = document.getElementById('time');
                const time = field.value;
                if (time === '0') {
                    field.style.borderBottomColor = 'indianred';
                    check = true;
                }
                if (check) {
                    return;
                }

                document.getElementById('service_confirm').innerText = 'Service: ' + this.getText('service');
                document.getElementById('master_confirm').innerText = 'Master: ' + this.getText('master');
                document.getElementById('time_confirm').innerText = 'Time: ' + this.getText('time');
                document.getElementById('date_confirm').innerText = 'Date: ' + date;
                this.getPrice();
                $(".confirm-order").addClass("change").addClass('animate');

            },
            getDate() {
                return document.getElementById('datefield').value;
            },
            getName(){
                this.$api.get('user', {params: {id: this.user.user_id}})
                .then (response => {
                    this.fname = response.data.first_name;
                    this.lname = response.data.last_name;
                })
                .catch (e => {
                    console.log(e);
                })
            },
            availableMasters() {
                const old_date = document.getElementById('checkdatefield').value
                const date = this.getDate();
                if (date === old_date) {
                    return;
                } else {
                    document.getElementById('checkdatefield').value = date;
                }

                this.$api.get('available_masters', {params: {date: date}})
                .then(response => {
                    this.available_masters = response.data.available;
                })
                .catch(e => {
                    console.log(e)
                })
            },
            availableHours() {
                const date = this.getDate();
                const e = document.getElementById('master')
                const master = e.options[e.selectedIndex].value;
                this.$api.get('available_hours/' + master, {params: {date: date}})
                .then(response => {
                    this.available_hours = response.data.hours;
                })
                .catch(e => {
                    console.log(e);
                })
            },
            getPrice() {
                const master = document.getElementById('master').value;
                const service = document.getElementById('service').value;
                this.$api.get('price', {params: {service: service, master: master}})
                .then(response => {
                    this.price = response.data.price;
                })
                .catch(e => {
                    console.log(e);
                })
            },
            postSubmit() {
                this.$api.post('make_order', qs.stringify({
                    fname: this.fname,
                    lname: this.lname,
                    phone: this.phone,
                    master: this.master,
                    service: this.service,
                    time: this.time,
                    date: this.date,
                    price: this.price
                }), {
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded"
                    }
                }).catch(e => {console.log(e)})
            }
        }
    }
</script>

<style scoped>
    @import url('../assets/order-style.css');
</style>