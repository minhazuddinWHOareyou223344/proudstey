$ (function  ()   {
    let togglerBtn = $(".myTooglerBtn");
    togglerBtn.click(function () {
      //*Primary Menu
      let menu = $("nav #myCustomNav ul");
      menu.toggleClass("menuActive");
  
      //*LOGO
      let logo = $("nav .myLogo");
      logo.toggleClass("activeLogo");
    });
    $(".myServiceSlider").slick({
      slidesToShow: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
  
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],




      





    });
// portfilo start hear 
// PORTFOLIO STARTS
$('.portfolioSliderr').slick({
  slidesToShow:6,
  arrows:false,
  autoplay:true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
       
      }
    },
    {
      breakpoint: 776,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    },
    
    
    
  ]
})
// PORTFOLIO ENDS



// protfoliea end hear 





    let navbar = $(".navbar");
    let backToTopBtn = $(".backToTopBtn");
    let number = 10;
  
  
  
    $(window).scroll(function () {
      let scrTop = $(window).scrollTop();
      console.log(scrTop);
      if (scrTop > 400) {
        navbar.addClass("menuFixed");
      } else {
        navbar.removeClass("menuFixed");
      }
  
      //*Back to top button view
      if (scrTop > 700) {
        backToTopBtn.fadeIn();
      } else {
        backToTopBtn.fadeOut();
      }
    });
   

      //*SLICK SLIDER FOR PORTFOLIO
  $(".portfolioSlider").slick({
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
// Find the 'count this' class on the page and animate it
$('.count-this').each(function () {

  // Start the counting from a specified number - in this case, 0!
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      // Speed of counter in ms, default animation style
      duration: 2000,
      // Easing function
      easing: 'swing',
      step: function (now) {
        // Round up the number
          $(this).text(Math.ceil(now));
      }
  });
});

$(".blogslider").slick({
  slidesToShow: 3,
  prevArrow:".blogleftarrows",
  nextArrow:".blogrigstarrows",
  autoplay: true,
  centerMode: true,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
// OUR TEAM STARTS
$('.ourTeamSlider').slick({
  slidesToShow:3,
  arrows:true,
  autoplay:false,
  centerMode:true,
  centerPadding: '0px',
  prevArrow:" .ourTeamarrows .ourTeamleftArrow ",
  nextArrow:" .ourTeamarrows .ourTeamrightArrow",
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
       
      }
    },
    {
      breakpoint: 776,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    },
    
    
    
  ]
})









$(".testimonialTextSlider").slick({
  arrows:false,
  asNavFor: ".testimonialImageSlider",
  fade: true,
});

$(".testimonialImageSlider").slick({
 
  slidesToShow: 3,
  centerMode: true,
  centerPadding: "0px",
  asNavFor: ".testimonialTextSlider",
});


});





$(".cardimgss").slick({
  slidesToShow: 5,
  arrows:false,
  autoplay:true,
  centerMode: true,
  centerPadding: '0x',
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object

        
        
        
      
  ],
 
  
});





