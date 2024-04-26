import { Search } from "./js/api.js";
import { elements } from "./js/helpers.js";
import { Recipe } from "./js/recipe.js";
import { renderLoader, renderResult } from "./js/ui.js";

const recipe = new Recipe();

const handleSubmit = async (e) => {
  e.preventDefault(); // Sayfanın yenilenmesini engeller

  // Inputun içerisindeki değeri alıp bir değişkene aktardık
  const query = elements.searchInput.value;
  // Inputun içerisi boşsa alert ile ekrana bildirim gönderdik.
  // Fonksiyonu burda durdurmak için return kullandık.
  if (query == "") {
    alert("Lütfen bir yemek ismi giriniz!");
    return;
  }
  //* Inputun içine herhangi bir şey yazarsak çalışır.
  if (query) {
    //* Search sınıfının bir örneğini oluşturduk
    const search = new Search(query);
    renderLoader(elements.resultsList);
    //* Search sınıfı içerisindeki getResult methodu ile apiye istek attık.
    try {
      await search.getResult();
      renderResult(search.result);
    } catch (error) {
      console.log(error);
    }
  }
};

const controlRecipe = async () => {
  // urldeki idye erişip # işareti yerine boş bir yapı ekledik.
  const id = location.hash.replace("#", "");
  if (id) {
    try {
      await recipe.getRecipe(id);
      recipe.renderRecipe(recipe.info);
    } catch (error) {
      console.log(error);
    }
  }
};

elements.form.addEventListener("submit", handleSubmit);
// eklenilen hash yapısı her değiştiğinde çalışır
window.addEventListener("hashchange", controlRecipe);
