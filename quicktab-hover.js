<script>

/* 01/2026, Elementor (V4) .quicktab-hover
*  Elementor Tabs and Accordion widget active by hover
*  CSS adds content fade-in entrance animation
*  https://xtcetera.com/ 
*/ 

document.addEventListener('DOMContentLoaded',function(){
jQuery(function($){
$('.quicktab-hover .e-n-tab-title').mouseenter(function(){
$(this).click();
});
});
});

</script>
    
<style>
.quicktab-hover .e-n-tabs-content .e-con.e-active {
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
