(function() {
    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        simulateTouch : true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },

         autoplay: {
          delay: 5000,
        },
    });
    
    $('.swiper-container .swiper-slide').on('click', function() {
      var slideId = $(this).attr('id');         
      openFullscreenSwiper(slideId);
    });
    
    function openFullscreenSwiper(initialSlideNumber) {
      var mainSwiperMarkup = $('.swiper-container').html(); 
      
      $('#fullscreen-swiper')
        .append(mainSwiperMarkup + "<div id='fullscreen-swiper-close'>X</div>")
        .fadeIn();
      
      var fullscreenSwiper = new Swiper('#fullscreen-swiper', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        initialSlide: initialSlideNumber - 1,
      });      
      
      $('#fullscreen-swiper-backdrop').fadeIn();
      $('body, html').addClass('no-scroll');  
  
      $('#fullscreen-swiper-close').on('click', function() {
        $('#fullscreen-swiper').hide().empty();
        $('#fullscreen-swiper-backdrop').fadeOut();
        $('body, html').removeClass('no-scroll');
      });
    
    }
  
  })();