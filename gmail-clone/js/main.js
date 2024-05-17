// console.log("Bağlantı kontrolü");
import { showModal, renderMails } from "./ui.js";
import { months } from "./contants.js";
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

// Sayfa yüklenince mailleri render eden fonk.

document.addEventListener("DOMContentLoaded", () => {
  renderMails(mailsArea, mailData);
});

// localden veri alma
const strMailData = localStorage.getItem("data");
// Mail Dizisi
const mailData = JSON.parse(strMailData) || [];

// Olay İzleyicileri
hamburgerMenu.addEventListener("click", hideMenu);

// Hamburger menuye tıklanınca nav kısmını düzenleyen fonksiyon
function hideMenu() {
  navigation.classList.toggle("hide");
}

// Modal Alanı ile ilgili işlemler
createMailBtn.addEventListener("click", () => showModal(modal, true));
closeMailBtn.addEventListener("click", () => showModal(modal, false));

// Ekran boyutuna bağlı olarak gerçekleşen işlemler

/*
Ekran boyutuna bağlı olarak navigation kısımı için hide klası ekleyip çıkardık.

Bu sayede ekran boyutu 1000'in altına düşünce bu kısım gizlendi(hide clası ekledik)
1000'in üzerinde ise bu yapı görünür oldu.(hide clasını kaldırdırdık.)


*/

window.addEventListener("resize", (e) => {
  const width = e.target.innerWidth;
  if (width < 1000) {
    navigation.classList.add("hide");
  } else {
    navigation.classList.remove("hide");
  }
});

// Mail İşlemleri:

form.addEventListener("submit", sendMail);
// Tarih Oluşturan Fonk.
function getDate() {
  // New Date ile elde edilen tarihin gün ve ayını değişkenlere aktararak istenilen yapıyı elde edeceğiz.

  const today = new Date();
  const day = today.getDate();
  const ay = today.getMonth();

  // Tarih Verisi Elde etme
  const date = day + "/" + ay + "year";
  const updateMonths = months[ay];
  return day + " " + updateMonths;
}

// Mail Oluşturan Fonk.
function sendMail(e) {
  // Sayfa Yenileme İptal
  e.preventDefault();
  const receiver = e.target[0].value;
  const title = e.target[1].value;
  const message = e.target[2].value;
  // console.log(receiver,title,message);

  if (!receiver || !title || !message) {
    Toastify({
      text: "Formu Doldurunuz",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#FF5733",
        borderRadius: "10px",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
    // Buradaki yapılardan herhangi biri boş ise kodu kırar ve geri kalan kısımı çalıştırmaz
    return;
  }

  const newMail = {
    id: new Date().getTime(), // id'ler benzersiz yapıda olmak durumundadır.Bizde burada milisaniye cinsinden benzersiz bir değer elde ettik
    sender: "Yusuf",
    receiver,
    title,
    message,
    // stared,
    date: getDate(),
  };
  // Diziye mail eklendi
  mailData.unshift(newMail);
  // localstorage verileri kaybetmemizi engeller bundan dolayı bu yapıyı kullanalım

  // localstorage string değer kabul eder bundan dolayı elimizdeki veriyi uygun formata çevirdik.
  const strData = JSON.stringify(mailData);

  // localstorage' a veri kaydet
  localStorage.setItem("data", strData);
  // modalı kapatıldı
  showModal(modal, false);
  // Modalı temizle
  e.target[0].value = "";
  e.target[1].value = "";
  e.target[2].value = "";
  Toastify({
    text: "Mail Başarıyla Eklendi",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
  // Ekranı güncelle
  renderMails(mailsArea, mailData);
}

// Toggle Yapısı

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  btn.classList.toggle("darkMode");
});
