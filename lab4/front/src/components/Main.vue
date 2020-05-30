<template>
    <div class="index-content" id="container">
        <div class="text-welcome">
            <h2>Ми скромна і щаслива сім'я дивовижних фабрик краси:
                Nail Factory, Face Factory і Hair Factory у Львові.</h2>
        </div>
        <div class="photo-welcome">
            <img src="../assets/images/photo-welcome.jpg" alt="" style="width: 100%">
        </div>
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
        <div class="info-part1">
            <div class="text">
                <h1>Face factory</h1>
                <p>Face Factory – місце, де тебе люблять. Зручний, простий і комфортний
                    простір ідеальних макіяжів, укладок, брів та вій. Ми пропагуємо натуральність
                    та природність у всьому, що створюємо. Команда професіоналів,
                    зручна локація, привітний сервіс, портфель ефективних продуктів по догляду за волоссям та обличчям.</p>
                <router-link v-if="user && user.username" :to="{name: 'Order'}">
                    <button class="btn">Записатись онлайн</button>
                </router-link>
                <router-link v-else :to="{name: 'Login'}">
                    <button class="btn">Увійдіть, щоб записатись</button>
                </router-link>
            </div>
            <img src="../assets/images/part1-info.jpg" alt="photo face factory">
        </div>
        <div class="info-part2">
            <div class="text2">
                <h1>Hair factory</h1>
                <p>Hair Factory – стильний та сучасний простір, де дбають про твоє волосся.
                    Складні фарбування та ідеальні відтінки, якісний догляд та стрижки, які тобі личать.</p>
                <router-link v-if="user && user.username" :to="{name: 'Order'}">
                    <button class="btn">Записатись онлайн</button>
                </router-link>
                <router-link v-else :to="{name: 'Login'}">
                    <button class="btn">Увійдіть, щоб записатись</button>
                </router-link>
            </div>
            <img src="../assets/images/part2-info.jpg" alt="photo hair factory">
        </div>
        <div class="info-part3">
            <div class="text3">
                <h1>Nail factory</h1>
                <p>Nail Factory – це комфортна, проста та сучасна нейл студія. Місце, де поважають час,
                    бережуть нерви та знають свою роботу. Центральна локація,
                    стильний простір, професійний сервіс.</p>
                <router-link v-if="user && user.username" :to="{name: 'Order'}">
                    <button class="btn">Записатись онлайн</button>
                </router-link>
                <router-link v-else :to="{name: 'Login'}">
                    <button class="btn">Увійдіть, щоб записатись</button>
                </router-link>
            </div>
            <img src="../assets/images/part3-info.jpg" alt="photo nail factory">
        </div>
        <div class="empty" style="width: 100%; height: 50px"></div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import {mapState} from 'vuex'
    export default {
        name: "Main",
        mounted() {
            this.jq();
        },
        methods: {
            jq() {
                $(function () {
                    var header = $(".info-part1");
                    var header1 = $(".info-part2");
                    var header2 = $(".info-part3");
                    $(window).scroll(function () {
                        var scroll = $(window).scrollTop();
                        if (window.matchMedia("(min-width: 800px)")) {
                            if (scroll >= 250) {
                                header.removeClass('header').addClass("info-part1-alt");
                            } else if (scroll <= 250) {
                                header.removeClass("info-part1-alt").addClass('header');
                            }
                            if (scroll >= 800) {
                                header1.removeClass('header1').addClass("info-part2-alt");
                            } else if (scroll <= 800) {
                                header1.removeClass("info-part2-alt").addClass('header1');
                            }
                            if (scroll >= 1050) {
                                header2.removeClass('header2').addClass("info-part3-alt");
                            } else if (scroll <= 1050) {
                                header2.removeClass("info-part3-alt").addClass('header2');
                            }
                        } else if (window.matchMedia("(max-width: 800px)")) {
                            if (scroll >= 0) {
                                header.removeClass('header').addClass("info-part1-alt");
                            } else if (scroll <= 250) {
                                header.removeClass("info-part1-alt").addClass('header');
                            }
                            if (scroll >= 800) {
                                header1.removeClass('header1').addClass("info-part2-alt");
                            } else if (scroll <= 800) {
                                header1.removeClass("info-part2-alt").addClass('header1');
                            }
                            if (scroll >= 1050) {
                                header2.removeClass('header2').addClass("info-part3-alt");
                            } else if (scroll <= 1050) {
                                header2.removeClass("info-part3-alt").addClass('header2');
                            }
                        }
                    });
                });
            },
            closeNav() {
                document.getElementById("navigation").style.display = "none";
                document.getElementById("close").style.visibility = "hidden";
                document.getElementById("open").style.visibility = "visible";
                document.body.style.overflowY = "visible";
            },
            openNav() {
                document.getElementById("navigation").style.display = "flex";
                document.getElementById("close").style.visibility = "visible";
                document.getElementById("open").style.visibility = "hidden";
                document.body.style.overflowY = "hidden";
            }
        },
        computed: mapState(['user'])
    }
</script>