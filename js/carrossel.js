var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      
    },
    autoplay: {
        delay: 2800,
        disableOnInteraction: false,
      },
  });

  const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
});