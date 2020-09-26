$(function () {
   "use strict";

   // Smooth Scroll Code Start
   $("a").on('click', function (event) {
      if (this.hash !== "") {
         event.preventDefault();

         var hash = this.hash;

         $('html, body').animate({
            scrollTop: $(hash).offset().top
         }, 800, function () {

            window.location.hash = hash;
         });
      }
   });
   // Smooth Scroll Code End

   // Menu Active Code Start
   $('#mainMenu ul li a').on('click', function () {
      $('#mainMenu ul li a').removeClass('active')
      $(this).addClass('active')
   })
   // Menu Active Code End

   // Header Fixed Code Start
   var headerOffset = $('#header').offset().top

   $(window).on('scroll',function(){
     var scrollSize = $(window).scrollTop()
     if(100 < scrollSize){
       $('#header').addClass('header_fixed')
       $('#header').css('height','70px')
       $('body').css('margin-top','70px');

     }else{
       $('#header').removeClass('header_fixed')
       $('#header').css('height','100px')
       $('body').css('margin-top','0');
     }
     
   })
   // Header Fixed Code End

})