// Burada bir fonksiyon tanımladık.Bu fonksiyon alınan parametreye göre modal'ın styleını belirliyor.Verilen 'willOpen' değeri true ise yapıyı gösterip false ise bu yapının display'ını none şeklinde belirlemiş oluyoruz.

export function showModal(modal, willOpen) {
  modal.style.display = willOpen ? "grid" : "none";
}
