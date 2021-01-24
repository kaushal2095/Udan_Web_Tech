 $(window).scroll(function(event) {
 
      if($(this).scrollTop()>100){
          $("#header").addClass("header-scrolled");
          $(".cordinator").fadeIn("slow");
      }
      else{
        $("#header").removeClass("header-scrolled");
        $(".cordinator").fadeOut("slow");
      }
  });

  $(".cordinator").click(function(event) {
     $("html,body").animate({
       scrollTop:0
  },700);
     return false;
      });

   $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });
  
  

	new WOW().init();

    $('.hamburger-menu').click(function(e){

              e.preventDefault();

              if(!$(".sidebar-fixed").hasClass("active")){
                
                   $("#logo").addClass("active");
                   
              }
              else{
                   $("#logo").removeClass("active");
              }

              $(this).toggleClass('active');
              $(".sidebar-fixed").toggleClass("active");
              $(".overlay").toggleClass("active");
               $('.menu-overlay').fadeToggle( 'slow', 'linear' );
               
         });

     $(".overlay").on("click",function(e){

       e.preventDefault();

        if(!$(".sidebar-fixed").hasClass("active")){
                
                   $("#logo").addClass("active");
              }
              else{
                   $("#logo").removeClass("active");
              }

           
              $(".hamburger-menu").toggleClass('active');
              $(".sidebar-fixed").toggleClass("active");
              $(this).toggleClass("active");
               $('.menu-overlay').fadeToggle( 'slow', 'linear' );
               $("#logo").toggleClass("active");
               $("#logo").fadeToggle("slow","linear");
            
             
    });
