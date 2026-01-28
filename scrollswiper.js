<script>

/* 01/2026, Elementor (V4) .scrollswiper
*  Elementor Carousel widget enable scrolling mouse-wheel control
*  https://xtcetera.com/ 
*/

    jQuery(document).ready(function($) {
        $('.scrollswiper').on('wheel', function (e) {
            var swiperContainer = document.querySelector('.scrollswiper .e-n-carousel');
            if (swiperContainer && swiperContainer.swiper) {
                if (e.originalEvent.deltaY < 0) {
                    swiperContainer.swiper.slidePrev();
                } else {
                    swiperContainer.swiper.slideNext();
                }
                e.preventDefault();
            }
        });
});
</script>
