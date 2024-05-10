// console.log("Bağlantı kontrolü");
import { showModal } from "./ui.js";
//! Html'den Gelen Elemmanlar
const body = document.querySelector("body");
const btn = document.getElementById("toggle");
const createMailBtn = document.querySelector(".create");
const closeMailBtn = document.querySelector("#close-btn");
const modal = document.querySelector(".modal-wrapper");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navigation = document.querySelector("nav");
const form = document.querySelector("#create-mail-form");
const mailsArea = document.querySelector(".mails-area");
const searchButton = document.querySelector("#search-icon");
const searchInput = document.querySelector("#search-input");
const categoryArea = document.querySelector(".nav-middle");
// Olay İzleyicileri
hamburgerMenu.addEventListener("click", hideMenu);

// Hamburger menuye tıklanınca nav kısmını düzenleyen fonksiyon
function hideMenu() {
  navigation.classList.toggle("hide");
}

// Modal Alanı ile ilgili işlemler
createMailBtn.addEventListener("click", () => showModal(modal, true));
closeMailBtn.addEventListener("click", () => showModal(modal, false));
