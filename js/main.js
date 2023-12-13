
(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 900);
            return false;
          }
        }
      });

	
  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        var $imgs = $("img");
        var $imgss = $("img.lazy");
        var $win = $(window);

        $container.isotope({
            filter: '.3d',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $container.isotope({
              onLayout: function() {
                  $win.trigger("scroll");
              }
          });
        $imgs.load(function () {
               $container.isotope('reLayout');
           }); 
        $imgss.lazyload({
              failure_limit: Math.max($imgss.length - 1, 0)
            });

        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	

}());
