let listmenu = document.getElementById("listmenu");
let bars = document.getElementById("bars");
let xmark = document.getElementById("xmark");
let logo = document.querySelector(".logo"); // ambil elemen logo

listmenu.style.maxHeight = "0px";
xmark.style.display = "none"; // awalnya disembunyikan

function openMenu() {
  listmenu.style.maxHeight = "100vh";
  bars.style.display = "none";
  xmark.style.display = "inline-block";
  logo.style.display = "none"; // sembunyikan logo
}

function closeMenu() {
  listmenu.style.maxHeight = "0px";
  xmark.style.display = "none";
  bars.style.display = "inline-block";
  logo.style.display = "block"; // tampilkan logo kembali
}

bars.addEventListener("click", openMenu);
xmark.addEventListener("click", closeMenu);

// Tutup menu otomatis saat klik link (khusus mobile)
document.querySelectorAll("#listmenu a").forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});
