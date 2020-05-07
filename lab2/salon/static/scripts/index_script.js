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

function closeNav() {
    document.getElementById("navigation").style.display = "none";
    document.getElementById("close").style.visibility = "hidden";
    document.getElementById("open").style.visibility = "visible";
    document.body.style.overflowY = "visible";
}

function openNav() {
    document.getElementById("navigation").style.display = "flex";
    document.getElementById("close").style.visibility = "visible";
    document.getElementById("open").style.visibility = "hidden";
    document.body.style.overflowY = "hidden";
}