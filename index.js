     
// NAvigation bar code
 function toggleNavbar() {
      var navbar = document.getElementById("navbar");
      navbar.classList.toggle("responsive");
    }


// Swiper js code

var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      grabCursor: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


// Portfolio image gallery section code
document.querySelectorAll('.gallery-item img').forEach(image => {
     image.onclick = () =>{
          document.querySelector('.popup-image').style.display = "block";
          document.querySelector('.popup-image img').src = image.getAttribute('src');
     }

});

document.querySelector('.popup-image span').onclick = () => {
     document.querySelector('.popup-image').style.display = "none";
} 
