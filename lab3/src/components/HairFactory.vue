<template>
        <div class="index-content">
            <div class="btn-corner">
                <router-link :to="{name: 'Order'}">
                    <button>Записатись онлайн</button>
                </router-link>
            </div>
            <h1 class="header">Сервіси</h1>
            <div class="services-hair" id="service">
                <div class="one">
                    <a href="#C11"><img src="../assets/images/11.jpg" alt="" style="width: 100%; height: auto"></a>
                    <h2>Колористика</h2>
                    <p>Фарбування коренів, тон в тон, складне фарбування, вихід з чорного, безпечне фарбування.</p>
                </div>
                <div class="two">
                    <a href="#C22"><img src="../assets/images/22.jpg" alt="" style="width: 100%;height: auto"></a>
                    <h2>Догляд за волоссям</h2>
                    <p>Захист при фарбуванні, зволоження, очищення, живлення, відновлення волосся.</p>
                </div>
                <div class="three">
                    <a href="#C33"><img src="../assets/images/33.jpg" alt="" style="width: 100%; height: auto"></a>
                    <h2>Стрижки</h2>
                    <p>Наші майстри підберуть стрижку, яка тобі найкраще личить – боб, лінія, градація.</p>
                </div>
            </div>
            <div class="prices">
                <h1>Прайс-лист</h1>
                <h3 id="C11">Колористика</h3>
                <p>Фарбування коренів – 1300 грн <br>
                    Фарбування тон в тон/тонування 1 довжина – 1600 грн <br>
                    Фарбування тон в тон/тонування 2 довжина – 1800 грн <br>
                    Фарбування тон в тон/тонування 3 довжина – 2000 грн <br>
                    Фарбування тон в тон/тонування 4 довжина – 2200 грн <br>
                    Складне фарбування 1 довжина – 3000 грн <br>
                    Складне фарбування 2 довжина – 3500 грн <br>
                    Складне фарбування 3 довжина – 4000 грн <br>
                    Складне фарбування 4 довжина – 4500 грн</p>
                <h3 id="C22">Догляд</h3>
                <p>
                    Lebel Абсолютне щастя 1 довжина – 2100 грн <br>
                    Lebel Абсолютне щастя 2 довжина – 2400 грн <br>
                    Lebel Абсолютне щастя 3 довжина –2700 грн <br>
                    Lebel Абсолютне щастя 4 довжина – 3000 грн <br>
                    Kerastase Blond Absolu 1 довжина – 1300 грн <br>
                    Kerastase Blond Absolu 2 довжина – 1400 грн <br>
                    Kerastase Blond Absolu 3 довжина –1500 грн <br>
                    Kerastase Blond Absolu 4 довжина – 1600 грн <br>

                </p>
                <h3 id="C33">Стрижка</h3>
                <p>
                    Стрижка жіноча* – 600-800 грн <br>
                    Стрижка кінців* – 600-800 грн <br>
                    Стрижка жіноча + пілінг шкіри голови – 900 грн <br>
                    Стрижка чолки – 200 грн <br>
                    Стрижка чоловіча – 400 грн <br>
                    Стрижка чоловіча + пілінг шкіри голови – 600 грн <br>
                    Камуфлювання сивини – 500 грн <br>
                    *у вартість входить миття голови та укладка <br>
                </p>
            </div>
            <div class="empty" style="width: 100%; height: 50px"></div>
        </div>
</template>

<script>
    export default {
        name: "HairFactory",
    }
</script>

<style scoped>
    @import url('../assets/hair-factory-style.css');
</style>