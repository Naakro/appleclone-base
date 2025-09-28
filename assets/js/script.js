let listmenu = document.getElementById("listmenu");
let bars = document.getElementById("bars");
let xmark = document.getElementById("xmark");
let logo = document.querySelector(".logo");

listmenu.style.maxHeight = "0px";
xmark.style.display = "none"; 

function openMenu() {
  listmenu.style.maxHeight = listmenu.scrollHeight + "px"; 
  bars.style.display = "none";
  xmark.style.display = "inline-block";
  logo.style.visibility = "hidden"; 
}

function closeMenu() {
  listmenu.style.maxHeight = "0px";
  xmark.style.display = "none";
  bars.style.display = "inline-block";
  logo.style.visibility = "visible";
}

bars.addEventListener("click", openMenu);
xmark.addEventListener("click", closeMenu);

// Tutup menu otomatis saat klik link (khusus mobile)
document.querySelectorAll("#listmenu a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Swiper
var swiper = new Swiper(".swiper", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
