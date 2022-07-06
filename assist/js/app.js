// // Alert Update

// alert("The website is still under development. So, you will miss some feature. Sorry For This 🙏 ");



// PRELOADER PLUGIN JS PART HERE 

$('.js-preloader').preloadinator({
    scroll: false,
    minTime: 2000,
    animation: 'fadeOut',
    animationDuration: 200,
  });

// PRELOADER PLUGIN JS PART END HERE 



// TYPED JS PART HERE 

const typed = new Typed('#type_animation', {
    strings: [
        "Web Designer.",
        "Wordpress Theme Developer.",
        "Graphic Designer.",
        "Freelancer."
    ],
    // FUNCTION TIME CODE HERE 

    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 500,
    loop: true,

});

// TYPED JS PART END HERE 




// STICKY JS PART HERE 

window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

// STICKY JS PART END HERE 





// BUTTON EFFECT PART HERE 

$(document).ready(function () {

    // ALL PART EFFECT HERE 
    $("#all").click(function () {
        $(".psd_html").show(700);
    });

    $("#all").click(function () {
        $(".wordpress").show(700);
    });

    $("#all").click(function () {
        $(".graphic_port").show(700);
    });


    // PSD TO HTML EFFECT 
    $("#psd_to_html").click(function () {
        $(".wordpress").hide(700);
    });

    $("#psd_to_html").click(function () {
        $(".graphic_port").hide(700);
    });

    $("#psd_to_html").click(function () {
        $(".psd_html").show(700);
    });



    // WORDPRESS EFFECT HERE 
    $("#wordpress").click(function () {
        $(".psd_html").hide(700);
    });

    $("#wordpress").click(function () {
        $(".graphic_port").hide(700);
    });

    $("#wordpress").click(function () {
        $(".wordpress").show(700);
    });



    // GRAPHIC DESIGN EFFECT 
    $("#graphic").click(function () {
        $(".psd_html").hide(700);
    });

    $("#graphic").click(function () {
        $(".wordpress").hide(700);
    });

    $("#graphic").click(function () {
        $(".graphic_port").show(700);
    });



});

// BUTTON EFFECT PART END HERE 