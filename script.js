var a = window.document.getElementById("no");
var b = window.document.getElementById("em");
var c = window.document.getElementById("ce");
var d = window.document.getElementById("me");

a.addEventListener("mouseenter", entrar);
a.addEventListener("mouseout", sair);
b.addEventListener("mouseenter", entrar);
b.addEventListener("mouseout", sair);
c.addEventListener("mouseenter", entrar);
c.addEventListener("mouseout", sair);
d.addEventListener("mouseenter", entrar);
d.addEventListener("mouseout", sair);

function entrar() {
  a.style.background = "white";
  a.style.color = "black";
  b.style.background = "white";
  b.style.color = "black";
  c.style.background = "white";
  c.style.color = "black";
  d.style.background = "white";
  d.style.color = "black";
}
function sair() {
  a.style.background = "#242424";
  a.style.color = "white";
  b.style.background = "#242424";
  b.style.color = "white";
  c.style.background = "#242424";
  c.style.color = "white";
  d.style.background = "#242424";
  d.style.color = "white";
}

let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");

btnMenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu");
});
menu.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});
overlay.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});
