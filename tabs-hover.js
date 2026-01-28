<script>
/* Elementor V4,  01/2026
* .quicktab - Tabs widget active by hover
*  https://xtcetera.com/ */
  
document.addEventListener('DOMContentLoaded',function(){
jQuery(function($){
$('.quicktab .e-n-tab-title').mouseenter(function(){
$(this).click();
});
});
});
</script>

<style>
/* CSS: Add mouseover content fade effect */
  
.quicktab .e-n-tabs-content .e-con.e-active {
    animation: fadeInTabs 0.8s ease forwards;
}
@keyframes fadeInTabs{
0% {
 opacity:0;
}
100% {
 opacity:1;
}
}
</style>
