<template>
    <div class="index-content" id="container">
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
        <div class="services" id="service">
            <div class="one">
                <a href="#C1"><img src="../assets/images/1.png" alt="" style="width: 100%" class="image"></a>
                <h2>Брови</h2>
                <p>Корекція форми брів класичною технікою, а також в комбінації з воском. Фарбування хною та фарбою.</p>
            </div>
            <div class="two">
                <a href="#C2"><img src="../assets/images/2.png" alt="" style="width: 100%"></a>
                <h2>Вії</h2>
                <p>Ламінування, кератиновий ліфтинг вій, створення природного завитка, фарбування вій.</p>
            </div>
            <div class="three">
                <a href="#C3"><img src="../assets/images/3.png" alt="" style="width: 100%"></a>
                <h2>Make up</h2>
                <p>Ретельно продуманий образ, який підкреслить природну красу кожної клієнтки.</p>
            </div>
            <div class="four">
                <a href="#C4"><img src="../assets/images/4.png" alt="" style="width: 100%"></a>
                <h2>Зачіски</h2>
                <p>Голівудські локони, класичні накрутки, афро-кучері, поєднання з плетінням.</p>
            </div>
            <div class="five">
                <a href="#C5"><img src="../assets/images/5.png" alt="" style="width: 100%"></a>
                <h2>Догляд за волоссям</h2>
                <p>Відновлення, живлення, зволоження та захист для натурального та фарбованого волосся.</p>
            </div>
        </div>
        <div class="prices">
            <h1>Прайс-лист</h1>
            <h3 id="C1">Brows</h3>
            <p>Корекція брів – 300 грн <br>
                Корекція брів + фарбування фарбою – 400 грн <br>
                Корекція брів + фарбування хною – 500 грн <br>
                Корекція брів + висвітлення + тонування – 500 грн <br>
                Фарбування фарбою – 300 грн <br>
                Фарбування хною – 400 грн <br>
                Висвітлення + тонування – 400 <br>
                Чоловіча корекція – 300 грн <br>
                Ламінування брів – 800 грн</p>
            <h3 id="C2">Lashes</h3>
            <p>Фарбування вій – 150 грн <br>
                Ламінування вій – 1000 грн <br>
                Кератиновий ліфтинг Yumi Lashes – 1500 грн <br>
                In Lei "Lash Filler" – 1500 грн</p>
            <h3 id="C3">Makeup</h3>
            <p>
                Baby Face – 500 грн <br>
                MakeUp – 800 грн <br>
                WOW MakeUp – 900 грн <br>
                Brida –l 1000 грн <br>
                MakeUp Police – 2000 грн <br>
            </p>
            <h3 id="C4">Hair</h3>
            <p>Плетіння* – 400 грн <br>
                Плетіння з канекалоном* – 600 грн <br>
                Укладка 1 довжина – 500 грн <br>
                Укладка 2 довжина – 700 грн</p>
            <h3 id="C5">Hair care</h3>
            <p>
                Olaplex 1 довжина – 1000 грн <br>
                Olaplex 2 довжина – 1400 грн <br>
                Olaplex 3 довжина – 1800 грн <br>
                Olaplex 4 довжина – 2000 грн
            </p>
        </div>
        <div class="empty" style="width: 100%; height: 50px"></div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "FaceFactory",
        computed: mapState(['user'])
    }
</script>

<style scoped>
    @import url('../assets/index-style.css');
    @import url('../assets/face-factory-style.css');
</style>