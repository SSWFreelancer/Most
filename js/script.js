$(document).ready(function (event) {
   $('.header__burger, .header__menu').click(function (event) {
     $('.header, .header__burger, .menu').toggleClass('active');
     $('body').toggleClass('lock');
   });
   $('.menu__item').click(function (event) {
      $('.header, .header__burger, .menu').removeClass('active');
      $('body').removeClass('lock');
   });  
     $('.main__video, .footer__button-video').click(function(event){
      event.preventDefault();
        $('.popup').addClass('open'); 
        $('body').addClass('lock');
      });
     $('.popup>p, .popup>span').click(function(event){
        $('.popup').removeClass('open'); 
        $('body').removeClass('lock');
        $(this).parent().find('video').get(0).pause(); 
      });     

     $('.main__go, .header__login, .header__signup, .footer__enter').click(function(event){
        event.preventDefault();
        $('.join-popup').addClass('open'); 
        $('body').addClass('lock');
        $('.header, .header__burger, .menu').removeClass('active');

      });
     $('.join-popup>span, .join-popup__close').click(function(event){
        $('.join-popup').removeClass('open'); 
        $('body').removeClass('lock');
      });   
      $('.main__marquees').width($('#main__marquee-1').width());
      $('.benefits__container').slick({
         responsive: [
           {
             breakpoint: 5000,
             settings: "unslick"
           },
           {
             breakpoint: 1321,
             settings: {
               arrows: false,
               dots: true,
               autoplay:false,
               infinite:false,
               swipe:true,
               slidesToShow: 1.1,
               speed: 800,            
             }
           },   
           {
             breakpoint: 800,
             settings: {
               arrows: false,
               dots: true,
               autoplay:false,
               infinite:false,
               swipe:true,
               slidesToShow: 1.05,
               speed: 800,            
             }
           },    
           {
             breakpoint: 701,
             settings: {
               arrows: true,
               dots: false,
               autoplay:false,
               infinite:false,
               swipe:true,
               slidesToShow: 1.05,
               speed: 800,   
             }
           },    

         ]      
      });   
      $('.road__content').slick({
         responsive: [
           {
             breakpoint: 5000,
             settings: "unslick"
           },
           {
             breakpoint: 1347,
             settings: {
               arrows: true,
               dots: false,
               autoplay:false,
               infinite:false,
               swipe:true,
               slidesToShow: 3,
               speed: 800,            
             }
           },   
           {
             breakpoint: 800,
             settings: {
               arrows: true,
               dots: false,
               autoplay:false,
               infinite:false,
               swipe:true,
               slidesToShow: 2.2,
               speed: 800,            
             }
           },    
           {
             breakpoint: 701,
             settings: {
               arrows: true,
               dots: false,
               autoplay:false,
               infinite:false,
               swipe:true,
               slidesToShow: 1.1,
               speed: 800,   
             }
           },    

         ]      
      });  
      $('.most__cards').slick({
         responsive: [
           {
             breakpoint: 5000,
             settings: "unslick"
           },
           {
             breakpoint: 1361,
             settings: {
               arrows: false,
               dots: true,
               autoplay:false,
               infinite:false,
               swipe:true,
                adaptiveHeight:false,
               slidesToShow: 1.1,
               speed: 800,            
             }
           },   
           {
             breakpoint: 992,
             settings: {
               arrows: false,
               dots: true,
               autoplay:false,
               infinite:false,
               swipe:true,
                adaptiveHeight:false,
               slidesToShow: 1.05,
               speed: 800,            
             }
           }, 

           {
             breakpoint: 701,
             settings: {
               arrows: true,
               dots: true,
               autoplay:false,
               infinite:false,
               swipe:true,
               slidesToShow: 1.03,
               adaptiveHeight:false,
               speed: 800,   
             }
           },    

         ]      
      }); 
      $('.technology__items').slick({
         responsive: [
           {
             breakpoint: 5000,
             settings: "unslick"
           },
           {
             breakpoint: 1361,
             settings: {
               arrows: false,
               dots: true,
               autoplay:false,
               infinite:true,
               slidesToShow: 5,
               speed: 800,            
             }
           },   
           {
             breakpoint: 1142,
             settings: {
               arrows: false,
               dots: true,
               autoplay:false,
               infinite:false,
               swipe:true,
               slidesToShow: 4,
               speed: 800,            
             }
           },   
           {
             breakpoint: 726,
             settings: {
               arrows: false,
               dots: true,
               autoplay:false,
               infinite:false,
               swipe:true,
               slidesToShow: 3,
               speed: 800,            
             }
           }, 
           {
             breakpoint: 458,
             settings: {
               arrows: false,
               dots: true,
               autoplay:false,
               infinite:true,
               swipe:true,
               slidesToShow: 2,
               speed: 800,            
             }
           },  

         ]      
      }); 

    $('.benefits__container')
     .on('afterChange', function(event, slick, currentSlide, nextSlide){
         $('.benefits__top span').html(currentSlide + 1);
     });

    $('.most__cards')
     .on('afterChange', function(event, slick, currentSlide, nextSlide){
      $('.most__cards').attr("data-top", $('.most__card.slick-current .most__top').attr("data-text"));
     });
});    

$(window).scroll(function (event) {
 var scroll = $(window).scrollTop();
     if(scroll>0){
         $('.header').addClass('scroll');
     }else{
         $('.header').removeClass('scroll');
     }
 });  