// Burada bir fonksiyon tanımladık.Bu fonksiyon alınan parametreye göre modal'ın styleını belirliyor.Verilen 'willOpen' değeri true ise yapıyı gösterip false ise bu yapının display'ını none şeklinde belirlemiş oluyoruz.

//!Modal Aç/Kapa Yapan Fonk.
export function showModal(modal, willOpen) {
  modal.style.display = willOpen ? "grid" : "none";
}

//!Metin kısıtlaması yapan fonk.
function trimString(str, max) {
  // Burada fonk. verilen metin max. karakter sayısından küçük ise bu yapıyı olduğu şekilde return et
  if (str.length < max) return str;
  // Verilen metin max. karakter sayısından büyük ise max. karakter kısımını aşan yapıyı kes ve '...' ile birleştir.
  return str.slice(0, max) + "...";
}

//!Mailleri ekrana basan Fonk.
export function renderMails(outlet, data) {
  if (!data) return;
  // bu fonk. her bir mail objesi için bir maili temsil eden html oluştursun.
  // Yani herbir maili ekrana bassın.
  outlet.innerHTML = data
    .map(
      (mail) => `
  <div class="mail" id="mail" data-id=${mail.id} >
   <div class="left">
   <input type="checkbox" />
    <span><i class="bi bi-star"></i></span>
    <span>${mail.receiver} </span>
     </div>
    <div class="right">
    <p class="message-title">${trimString(mail.title, 20)} </p>
    <p class="message-description">${trimString(mail.message, 40)} </p>
    <p class="message-date">${mail.date} </p>
     <div class="delete">
    <i class="bi bi-trash"></i>
    </div>
    </div>
   </div>
  `
    )
    .join(" ");
}
