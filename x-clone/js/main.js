import { mainEle, renderLoader, renderTweets, renderUserInfo } from "./ui.js";
import { API } from "./api.js";
import { getLocal } from "./helpers.js";

// Apı clasının örenğini al
const api = new API();

document.addEventListener("DOMContentLoaded", async () => {
  // Giriş yapan kullanıcıya erişme
  const user = getLocal("user");
  console.log(user);

  // Kullanıcı  Verisini Render Et
  renderUserInfo(user);
  // Render Loader
  renderLoader(mainEle.tweetsArea);

  // Giriş yapan kullanıcıya göre tweet  verisine erişme
  const data = await api.fetchData("/timeline.php", "screenname", user.profile);
  console.log(data.timeline);
  renderTweets(data.timeline, user);
});

// Çıkış yap butonuna tıklayınca çıkış işlemi
mainEle.logoutbtn.addEventListener("click", () => {
  // Localden kullanıcıyı kaldır
  localStorage.removeItem("user");
  // Giriş sayfasına yönlendir
  window.location = "../auth.html";
});
