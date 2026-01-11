<script>
/* Elementor carousel widget (css ID: .carousel-ms) active mouse scroll
* Code from https://xtcetera.com/
* Updated 12/01/2026
*/

    jQuery(document).ready(function($) {
        $('.carousel-ms').on('wheel', function (e) {
            var swiperContainer = document.querySelector('.carousel-ms .e-n-carousel');
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
