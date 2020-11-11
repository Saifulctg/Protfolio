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
     if(300 < scrollSize){
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

   // Isotope Filter Code Start
   var $grid = $('.protfolio_item').isotope();

    $('.work_list').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
   // Isotope Filter Code End

   // Menu Active Code Start

   $('.work_list li').on('click', function () {
      $('.work_list li').removeClass('active_li')
      $(this).addClass('active_li')
   })
   // Menu Active Code End

   // Venobox Code Start
   $('.venobox').venobox(); 
   // Venobox Code End

   // Minimal Progress Bar Code Start
   $('#web').LineProgressbar({
        percentage: 90,
        fillBackgroundColor:'#3498db',
        backgroundColor:'#e1e1e1',
        radius:'0 5px 5px 0',
        duration: 2200
      });
   $('#customize').LineProgressbar({
        percentage: 95,
        fillBackgroundColor:'#da916f',
        backgroundColor:'#e1e1e1',
        radius:'0 5px 5px 0',
        duration: 2500
      });
   $('#seo').LineProgressbar({
        percentage: 70,
        fillBackgroundColor:'#54e2ac',
        backgroundColor:'#e1e1e1',
        radius:'0 5px 5px 0',
        duration: 2000
      });
   $('#marketing').LineProgressbar({
        percentage: 65,
        fillBackgroundColor:'#a254e2',
        backgroundColor:'#e1e1e1',
        radius:'0 5px 5px 0',
        duration: 2000
      });
   $('#html').LineProgressbar({
        percentage: 90,
        fillBackgroundColor:'#3498db',
        backgroundColor:'#e1e1e1',
        radius:'0 5px 5px 0',
        duration: 2200
      });
   $('#css').LineProgressbar({
        percentage: 95,
        fillBackgroundColor:'#54e2ac',
        backgroundColor:'#e1e1e1',
        radius:'0 5px 5px 0',
        duration: 2500
      });
   $('#java').LineProgressbar({
        percentage: 70,
        fillBackgroundColor:'#54a2e2',
        backgroundColor:'#e1e1e1',
        radius:'0 5px 5px 0',
        duration: 2000
      });
   $('#bootstrap').LineProgressbar({
        percentage: 65,
        fillBackgroundColor:'#da916f',
        backgroundColor:'#e1e1e1',
        radius:'0 5px 5px 0',
        duration: 2000
      });
   // Minimal Progress Bar Code End

   // Counter Up Code Start
   $('.counter').counterUp({
      delay: 20,
      time: 2000
  });
   // Counter Up Code End

   // Back To Top Button Code Start
   $(window).on('scroll',function(){

      var scrollSize = $(window).scrollTop()

      if(scrollSize>800){
         $('.back_to_top_button').show(1000)

      }else{
         $('.back_to_top_button').hide(1000)
      }
      
   })
   $('.back_to_top_button').on('click',function(){
      $('body,html').animate({
         scrollTop:0
      },2000);
   })
   
   // Back To Top Button Code End

   // Wow Animated Code Start 
   new WOW().init();
   // Wow Animated Code End 

})