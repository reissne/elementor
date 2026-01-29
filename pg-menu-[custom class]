<script>

/* 01/2026, Elementor (V4) .pg-menu-[custom class]
*  Elementor one-page scroll with custom pagination of current active section
*  https://xtcetera.com/ 
*  ref: dmmotionarts.com/auto-highlight-menu-on-section-scroll-elementor-and-gsap-tutorial
*/

const pgMenuContent = document.querySelectorAll(".pg-menu-content");
const pgMenuBtns = document.querySelectorAll(".pg-menu-btn");
window.onscroll = () => {
  var current = "";

  pgMenuContents.forEach((pgMenuContent) => {
    const pgMenuContentTop = pgMenuContent.offsetTop;
    if (pageYOffset >= pgMenuContentTop - 60) {
      current = pgMenuContent.getAttribute("id"); }
  });

  pgMenuBtns.forEach((pgMenuBtn) => {
    pgMenuBtn.classList.remove("active");
    if (pgMenuBtn.classList.contains(current)) {
      pgMenuBtn.classList.add("active");
    }
  });
};

//Based on scroll-direction show/hidden floating background

let currentScroll2 = 0;
let isScrollingDown2 = true;


window.addEventListener("scroll", function(){

  if (window.pageYOffset > currentScroll2) {
    isScrollingDown2 = true;

    gsap.to(".pg-menu-nav", {
        y:'0%',
        ease: "power1.out"

    });
  } else {
    isScrollingDown2 = false;
    gsap.to(".pg-menu-nav", {
        y:'150%',
        ease: "power1.out"

    });
  }

  currentScroll2 = window.pageYOffset;
});


</script>

<style>


    /*Inactive/Default Menu*/
    .pg-menu-btn {
        width: 25%;
        color:white;
        transition: 0.5s ease-in-out;
        background: transparent;
        border-radius: 5px;
        border: 1px solid #2C2C2C;
    }

    /*Hover Menu Effect*/
    .pg-menu-btn:hover {
        color:white;
    }

    /*Auto-highlight Menu Effect*/
    .pg-menu-btn.active {
        color: black !important;
        background: white;
        border: 1px solid white;
    }


    /*Floating Bar Container*/
    .pg-menu-nav {
       position: fixed;
       bottom:10px;
       left: 50%;
       transform: translate(-50%,150%);
       transition: none !important;
       /*Blur glass filter*/
       backdrop-filter:blur(15px);
       -webkit-backdrop-filter:blur(15px);
    }


</style>
