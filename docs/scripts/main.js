$(document).ready(function(){
    console.log('JS up and running');


// Sticky Nav Bar
window.onscroll = function(){
    stickyFunction()
};

var nav = document.getElementById("nav");
var sticky = nav.offsetTop;
function stickyFunction(){
    if(window.pageYOffset >= sticky) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
};

////////////////////// smooth scrolling ////////////////////////
var scrollLink = $('.scroll');

scrollLink.on('click', function(e){
    e.preventDefault();
    $('body,html').animate({
        scrollTop: $(this.hash).offset().top -10
    }, 1000)
})

/////// highlight nav button active link after scroll ///////////
$(window).scroll(function(){
    var scrollBarLocation = $(this).scrollTop();
    
    scrollLink.each(function(){
        var sectionOffSet = $(this.hash).offset().top;
        console.log(`${sectionOffSet} sectionOffSet`);
        console.log(`${scrollBarLocation} scrollBarLocation`);
        if (sectionOffSet <= scrollBarLocation +60) {
            console.log($(this));
            $(this).addClass('highLight')
            $(this).parent().siblings().children().removeClass('highLight');
        }
    })
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






});