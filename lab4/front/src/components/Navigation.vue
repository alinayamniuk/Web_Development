<template>
    <div class="index-content">
        <div class="menubtn1">
            <a href="javascript:void(0)" onclick="openNav()"><i class="menu_open menu-icons fa fa-bars fa-lg" id="open"></i></a>
        </div>
        <div class="navbar" id="navigation">
            <div class="menubtn2">
                <a href="javascript:void(0)" onclick="closeNav()"><i class="menu_close menu-icons fa fa-times fa-lg" id="close"></i></a>
            </div>
            <nav class="nav-bar" id="clk">
                <router-link :to="{name: 'Main'}" class="active hover">ГОЛОВНА</router-link>
                <router-link :to="{name: 'FaceFactory'}" class="hover">Face factory</router-link>
                <router-link :to="{name: 'HairFactory'}" class="hover">Hair factory</router-link>
                <router-link :to="{name: 'NailFactory'}" class="hover">Nail factory</router-link>
                <router-link :to="{name: 'About'}" class="hover">Контакти</router-link>
            </nav>
            <div class="social-media">
                <i class="fab fa-instagram"></i>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-telegram-plane"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>