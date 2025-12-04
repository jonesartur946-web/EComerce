//------------Menu

const divtoShow = "nav .menu";
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector(".m-trigger");

divTrigger.addEventListener("click", (e) => {
  e.stopPropagation(); // impede o clique de fechar o menu via document

  // Toggle: se tem 'show', remove; se não tem, adiciona
  if (divPopup.classList.contains("show")) {
    divPopup.classList.remove("show");
    document.body.classList.remove("menu-visible");
  } else {
    divPopup.classList.add("show");
    document.body.classList.add("menu-visible");
  }
});






//fechar automaticamente pelos cliques de fora do menu
document.addEventListener("click", (e) => {
  const isClosest = e.target.closest(divtoShow);

  if (!isClosest && divPopup.classList.contains("show")) {
    divPopup.classList.remove("show");
    document.body.classList.remove("menu-visible");
  }
})

//// ---Pesquisando

const sTrigger = document.querySelector(".s-trigger");
const addclass = document.querySelector(".site");

sTrigger.addEventListener("click", ()=> {
    addclass.classList.toggle("showsearch")
})

//----------------------------------> Slider <--------------------------
const sliderThumb = new Swiper('.thumb-nav', {
  // Optional parameters
spaceBetween:10,
  slidesPerView:3,
  slidesPerGroup:false,
  breakpoints: {
    992:{
         direction:'vertical'
    }
  }

});

const theSlider = new Swiper('.thumb-big', {
  // Optional parameters
  slidePerView:1,
  pagination: {
    el: ".swiper-pagination",
  },
   thumbs: {
    swiper: sliderThumb, 
   }
});







//-----------------TABBED PRODUCTS---------------------------
const tabbeNav = new Swiper('.tnav', {
  
spaceBetween:20,
  slidesPerView:6,
  centeredSlides: true,
  slidesPerGroup:false,
  

});

const theTab = new Swiper('.tabbed-item', {
  loop: true,
  slidesPerView: 1,   
  autoHeight: true,
  thumbs: {
    swiper: tabbeNav,
  }
});



/*  Transition ao fazer o scrool*/

const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0){
            entry.target.classList.add('this')
        }
    })
})

const box = document.querySelectorAll('.animate');
box.forEach((el) => {
    io.observe(el);
})


