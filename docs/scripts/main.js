$(document).ready(function(){
    console.log('JS up and running');


// Sticky Nav Bar
window.onscroll = function(){
    stickyFunction()
    stickyHamFunction()
};

var nav = document.getElementById("nav");
var sticky = nav.offsetTop;
function stickyFunction(){
    let checked = document.getElementById('menu-btn').checked
    if(window.pageYOffset >= sticky && checked === false) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
};

var navHam = document.getElementById("navHam");
var stickyHam = navHam.offsetTop;
function stickyHamFunction(){
    if(window.pageYOffset >= stickyHam) {
        navHam.classList.add("sticky");
    } else {
        navHam.classList.remove("sticky");
    }
};

////////// remove sticky nav when ham is clicked ///////////////

$('.menu-icon').on('click', function() {
    document.getElementById("nav").classList.remove("sticky")
})


////////////////////// smooth scrolling ////////////////////////
var scrollLink = $('.scroll');

scrollLink.on('click', function(e){
    e.preventDefault();
    $('body,html').animate({
        scrollTop: $(this.hash).offset().top
    }, 1000)
})

/////// highlight nav button active link after scroll ///////////
$(window).scroll(function(){
    var scrollBarLocation = $(this).scrollTop();
    
    scrollLink.each(function(){
        var sectionOffSet = $(this.hash).offset().top;
        console.log(`${sectionOffSet} sectionOffSet`);
        console.log(`${scrollBarLocation} scrollBarLocation`);
        if (sectionOffSet <= scrollBarLocation +10) {
            console.log($(this));
            $(this).addClass('highLight')
            $(this).parent().siblings().children().removeClass('highLight');
        }
    })
})

//////////////// hide hamburger menu after scroll  ///////////////

$('.navItem').on('click', function(){
    console.log("you clicked me")
    let hideMenu = function() {
    $('.menu-btn').prop("checked", false)
    }
    setTimeout(hideMenu, 1500)
})

////////// quotes fade in and out ////////////////////////////////
var testimonialFadeInOut = function(){
    var testimonials = $('.testimonial');
    console.log(testimonials);
    var testimonialsIndex = -1;

    function showNextTestimonial() {
        ++testimonialsIndex;
        testimonials.eq(testimonialsIndex % testimonials.length)
            .fadeIn(2000)
            .delay(6000)
            .fadeOut(600, showNextTestimonial);
    }
    showNextTestimonial();
}
testimonialFadeInOut();

////////////lightbox ///////////////////////////////////////////////

// $('#lightBox').modal('show');



// $('.carousel').on('click',function(e){
//     $('.modal').modal('show');
//     console.log(e.target);
//     var pic = e.target
//     $('.modal-body').append(pic);
// });

$('#portfolioCarousel').on('click', function(){
    $('body').toggleClass('portfolioToggle');
});

//////////////////burger /////////////////////////////

// parallax

// $('.parallax-window').parallax({imageSrc: '/docs/assets/graf2.jpg', speed: '1'})
let image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
    orientation: 'right',
    delay: 2.8
});

let imageTwo = document.getElementsByClassName('thumbnailTwo');
new simpleParallax(imageTwo, {
    orientation: 'left',
    delay: 2.8
});



// 
$("#headshotLookUp").on({
    mouseenter: function(){
        console.log("mouseenter")
        $(this).attr("src", 'docs/assets/headshot724X543.jpg');
    },
    mouseleave: function(){
        console.log("mouseleave")
        $(this).attr("src",'docs/assets/vegas724X543.jpg')
    }
})

$("#headshot").on({
    mouseenter: function(){
        console.log("mouseenter")
        $(this).attr("src", 'docs/assets/vegas543X543cropfromtop.jpg');
    },
    mouseleave: function(){
        console.log("mouseleave")
        $(this).attr("src",'docs/assets/squareHeadshot.jpg')
    }
})





});