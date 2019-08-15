$(document).ready(function() {
    $('.js--section-features').waypoint(function(direction) {
        if (direction=="down"){
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
});
    
    $('.js--btn').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-features').offset().top},1000);
    })
    
     $('.js--cas').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-features').offset().top},1000);
    })
    
     $('.js--team').click(function(){
        $('html,body').animate({scrollTop:$('.js--meet').offset().top},1000);
    })
    
     $('.js--chirec').click(function(){
        $('html,body').animate({scrollTop:$('.chirec').offset().top},1000);
    })
});
    


