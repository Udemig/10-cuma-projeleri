import { mainEle } from "./ui.js";
import { API } from "./api.js";
import { getLocal } from "./helpers.js";
// Apı clasının örenğini al
const api = new API();

document.addEventListener("DOMContentLoaded", async () => {});

// Çıkış yap butonuna tıklayınca çıkış işlemi
mainEle.logoutbtn.addEventListener("click", () => {
  // Localden kullanıcıyı kaldır
  localStorage.removeItem("user");
  // Giriş sayfasına yönlendir
  window.location = "../auth.html";
});
