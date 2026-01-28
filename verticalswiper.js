<script>

/* 01/2026, Elementor (V4) .verticalswiper
*  Elementor Carousel widget vertical animation
*  CSS adds content fade-in entrance animation
*  https://xtcetera.com/ 
*/ 

(function () {

  const VC = {
    selector: '.elementor-widget-n-carousel.verticalswiper', // target widgets
    slidesPerView: 1,      // keep 1 for clean vertical paging
    spaceBetween: 0,       // px; 0 prevents “peeking”
    speed: 450,            // ms
    loop: true,            // true = infinite with clones
    rewind: false,         // used only when loop=false (wraps end<->start)
    mousewheel: true,      // wheel/trackpad scroll
    keyboard: true,        // arrow keys
    autoplay: {            // Elementor expects autoplay API; we guard it
      enabled: false,      // set true to auto-advance
      delay: 3000,
      pauseOnHover: true
    }
  };

  function flipToVertical(widget) {
    if (!widget || !widget.matches(VC.selector)) return;

    const el = widget.querySelector('.e-n-carousel__swiper, .e-n-carousel.swiper, .swiper');
    if (!el) return;

    let tries = 0;
    (function wait() {
      const sw = el.swiper || (window.jQuery && jQuery(el).data && jQuery(el).data('swiper'));
      if (!sw) { if (tries++ < 100) return requestAnimationFrame(wait); else return; }

      try {
        const p = sw.params;

        p.direction = 'vertical';
        if (typeof sw.changeDirection === 'function') sw.changeDirection('vertical', false);

        p.slidesPerView = VC.slidesPerView ?? p.slidesPerView ?? 1;
        p.spaceBetween  = VC.spaceBetween  ?? p.spaceBetween  ?? 0;
        p.speed         = VC.speed         ?? p.speed         ?? 450;
        p.autoHeight    = false;                 
        p.roundLengths  = true;                  
        p.allowTouchMove = true;
        
        p.keyboard   = VC.keyboard   ? { enabled: true } : false;
        p.mousewheel = VC.mousewheel ? { forceToAxis: true, releaseOnEdges: true, sensitivity: 0.5 } : false;

        if (VC.autoplay && VC.autoplay.enabled) {
          p.autoplay = {
            delay: VC.autoplay.delay || 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: !!VC.autoplay.pauseOnHover
          };
        } else {
          p.autoplay = false;
          sw.autoplay = sw.autoplay || {};
          if (typeof sw.autoplay.stop  !== 'function') sw.autoplay.stop  = function(){};
          if (typeof sw.autoplay.start !== 'function') sw.autoplay.start = function(){};
        }

        if (VC.loop) {
          if (typeof sw.loopDestroy === 'function') sw.loopDestroy(); 
          p.loop = true;
          p.rewind = false;
          if (typeof sw.loopCreate === 'function') sw.loopCreate();   
        } else {
          if (typeof sw.loopDestroy === 'function') sw.loopDestroy();
          p.loop = false;
          p.rewind = !!VC.rewind;
        }

        el.classList.add('swiper-vertical');
        el.classList.remove('swiper-horizontal');

        sw.updateSlides();
        sw.updateSize();
        sw.update();
        sw.slideTo(sw.activeIndex || 0, 0, false);
      } catch (e) {
        console.warn('Vertical flip error:', e);
      }
    })();
  }

  function scan(scope) {
    (scope || document).querySelectorAll(VC.selector).forEach(flipToVertical);
  }

  document.addEventListener('DOMContentLoaded', function(){ scan(document); });

  if (window.jQuery) {
    jQuery(window).on('elementor/frontend/init', function () {
      elementorFrontend.hooks.addAction('frontend/element_ready/n-carousel.default', function ($scope) {
        if ($scope && $scope[0]) scan($scope[0]);
      });
    });
  }
})();

</script>
