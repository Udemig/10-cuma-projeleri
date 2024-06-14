import { mainEle } from "./ui";

mainEle.logoutbtn.addEventListener("click", () => {
  console.log("Çıkış");
});
mainEle.logoutbtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location = "../auth.html";
});
