import { setLocal } from "./helpers.js";
import { authEle } from "./ui.js";
import { API } from "./api.js";
const api = new API();

// Regex:
// Enaz 6 karakter,1 küçük harf,1 büyük harf birde sayı
const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;

// Giriş hatalarını render eden fonk.
const renderWarns = (nameWarning, passWarning) => {
  if (nameWarning) {
    authEle.nameArea.innerHTML = `
        <p class="warning">${nameWarning} </p>
        `;
  } else {
    authEle.nameArea.innerHTML = "";
  }
  if (passWarning) {
    authEle.passArea.innerHTML = `  <p class="warning">${passWarning} </p>`;
  } else {
    authEle.passArea.innerHTML = "";
  }
};

authEle.loginForm.addEventListener("submit", async (e) => {
  // Sayfa yenilemesi  kapatma
  e.preventDefault();
  // input verilerine erişme
  const name = authEle.nameInp.value;
  const pass = authEle.passwordInp.value;
  //   console.log(name, pass);
  let nameWarning = null;
  let passWarning = null;

  // Form Kontrol

  // İsim kontrolü
  if (!name) {
    nameWarning = "İsim kısımı boş bırakılamaz";
  } else if (name.length <= 3) {
    nameWarning = "İsim 3 karakterden kısa olamaz";
  } else {
    nameWarning = null;
  }
  // Şifre Kontorlü

  if (!pass) {
    passWarning = "Şifre giriniz !!";
  } else if (pass.length < 6) {
    passWarning = "Şifre 6 haneden kısa olamaz";
  } else if (!regex.test(pass)) {
    passWarning = "Zayıf Şifre";
  } else {
    passWarning = null;
  }

  renderWarns(nameWarning, passWarning);
  // isim ve kullanıcı hatası yoksa
  if (!nameWarning && !passWarning) {
    // api a istek at
    const userData = await api.getuser(name);
    // locale kullanıcı ekle
    setLocal("user", userData);
    // console.log(userData);

    // Son olarak ana sayfaya yönlendirme. Window içerisindeki location ile konum belirlendi
    window.location = "/";
  }
});
