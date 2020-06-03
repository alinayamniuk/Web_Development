<template>
    <div class="index-content">
        <div class="btn-corner-right">
            <router-link v-if="user && user.username" :to="{name: 'Order'}">
                <button>Записатись онлайн</button>
            </router-link>
            <router-link v-else :to="{name: 'Login'}">
                <button>Увійдіть, щоб записатись</button>
            </router-link>
        </div>
        <div v-if="user && user.username" class="btn-corner-left">
            <router-link :to="{name: 'Logout'}">
                <button>Вийти</button>
            </router-link>
        </div>
        <h1 class="header">Сервіси</h1>
        <div class="services-nail" id="service">
            <div class="one">
                <a href="#C111"><img src="../assets/images/111.jpg" alt="" style="width: 100%; height: auto" class="image"></a>
                <h2>Мані</h2>
                <p>Класичний, апаратний, комбінований манікюр. Тільки найкрутіші продукти, бо у питаннях якості ми не знаємо компромісів.</p>
            </div>
            <div class="two">
                <a href="#C222"><img src="../assets/images/222.jpg" alt="" style="width: 100%;height: auto"></a>
                <h2>Дизайн</h2>
                <p>У наших майстрів є ідеї та натхнення для твоїх нігтів кожного дня та кожного сезону.</p>
            </div>
            <div class="three">
                <a href="#C333"><img src="../assets/images/333.jpg" alt="" style="width: 100%; height: auto"></a>
                <h2>Педі</h2>
                <p>Комфортна зона педі, де ти можеш поєднати мані+педі і насолодитися коктейлями.</p>
            </div>
            <div class="four">
                <a href="#C444"><img src="../assets/images/444.jpg" alt="" style="width: 100%; height: auto"></a>
                <h2>Подологія</h2>
                <p>Робота з врослими нігтями, мозолями та натоптишами. Коректуюча система "Титанова нитка".</p>
            </div>
        </div>
        <div class="prices">
            <h1>Прайс-лист</h1>
            <h3 id="C111">Мані</h3>
            <p>
                Європейський – 200 грн <br>
                Класичний – 250 грн <br>
                Комбінований – 270 грн <br>
                Апаратний – 330 грн <br>
                Чоловічий – 350 грн <br>
                Дитячий – 120 грн
            </p>
            <h3 id="C222">Дизайн</h3>
            <p>
                Однотонне покриття гель-лаком – 300 грн <br>
                Покриття гель-лаком + minimal дизайн – 400 грн <br>
                Покриття гель-лаком + maxi дизайн – 500 грн <br>
                Френч – 400 грн <br>
                Омбре – 450 грн <br>
                Покриття лак – 200 грн <br>
                Покриття дитяче – 120 грн <br>
            </p>
            <h3 id="C333">Педі</h3>
            <p>
                Жіночий – 410 грн <br>
                Чоловічий – 500 грн <br>
                Дитячий – 200 грн <br>
            </p>
            <h3 id="C444">Подологія</h3>
            <p>
                Консультація подолога – 100 грн <br>
                Мозолі, натоптиші – 100-200 грн <br>
                Врослий ніготь – 200-280 грн <br>
                Система корекції "Титанова нитка" – 600 грн <br>
            </p>
        </div>
        <div class="empty" style="width: 100%; height: 50px"></div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "NailFactory",
        computed: mapState(['user'])
    }
</script>

<style scoped>
    @import url('../assets/nail-factory-style.css');
</style>