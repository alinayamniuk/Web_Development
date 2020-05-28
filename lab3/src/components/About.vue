<template>
    <div class="index-content">
        <div class="menubtn1">
            <a href="javascript:void(0)" onclick="openNav()"><i class="menu_open menu-icons fa fa-bars fa-lg" id="open"></i></a>
        </div>
        <div class="btn-corner">
            <router-link :to="{name: 'Order'}">
                <button>Записатись онлайн</button>
            </router-link>
        </div>
        <h1 class="header">Салони</h1>
        <p class="middle">Ми відкриті щодня з 9:00 до 20:00 незалежно від локації</p>
        <div class="salon" id="service">
            <div class="text">
                <h3>Face factory</h3>
                <p>вул. Гнатюка 12А</p>
                <p>м. Львів</p>
                <p>face@factoryfamily.co</p>
                <p>(068) 400 40 60</p>
            </div>
            <img src="../assets/images/contact1.jpg" alt="photo face factory">
        </div>
        <div class="salon-reverse">
            <div class="text">
                <h3>Nail factory</h3>
                <p>вул. Кульпарківська, 226г</p>
                <p>ЖК "Місто Трав"</p>
                <p>nail@factoryfamily.co</p>
                <p>(068) 370 90 90</p>
            </div>
            <img src="../assets/images/contact2.jpg" alt="photo hair factory" >
        </div>
        <div class="salon">
            <div class="text">
                <h3>Hair factory</h3>
                <p>вул. Наливайка, 5</p>
                <p>м. Львів</p>
                <p>hair@factoryfamily.co</p>
                <p>(068) 700 71 77</p>
            </div>
            <img src="../assets/images/part2-info.jpg" alt="photo nail factory">
        </div>
        <div class="empty" style="width: 100%; height: 50px"></div>
    </div>
</template>

<script>
    // import '../assets/contact-style.css'
    export default {
        name: "About",

    }
</script>

<style scoped>
    @import url('../assets/contact-style.css');
</style>