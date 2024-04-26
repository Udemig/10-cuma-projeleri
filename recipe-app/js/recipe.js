import { elements } from "./helpers.js";

export class Recipe {
  constructor() {
    this.info = {};
    this.ingredients = [];
  }

  async getRecipe(id) {
    console.log(id);
    // tarif bilgilerini alma
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    // veriyi jsona çevirme
    const data = await res.json();
    this.info = data.data.recipe;
    this.ingredients = data.data.recipe.ingredients;
  }

  createIngerient() {
    console.log(this.ingredients);
    const html = this.ingredients
      .map(
        (ingeredient) =>
          `
        <li>
            <i class="bi bi-check-circle"></i>
            <p>${ingeredient.description}</p>
        </li>
        
        `
      )
      .join("");
    return html;
  }

  renderRecipe(recipe) {
    console.log(recipe);
    const markup = `
    <figure>
        <img src="${recipe.image_url}" alt="" />
        <h1>${recipe.title}</h1>
        <p class="like-area">
        <i class="bi bi-heart"></i>
        </p>
    </figure>
    <div class="ingredients">
        <ul>
        
            ${this.createIngerient()}
        </ul>
        <button>
        <i class="bi bi-cart-fill"></i>
        <span>Alışveriş Sepetine Ekle</span>
        </button>
    </div>
    <div class="directions">
        <h2>Nasıl Pişirilir</h2>
        <p>
        Bu tarif dikkatlice <span>${recipe.publisher}</span> tarafından
        hazırlanmış ve test edilmiştir. Diğer detaylara onların websitesi
        üzerinden erişebilirsinzi
        </p>
        <a href="${recipe.source_url}" target="_blank">Yönerge</a>
    </div>

    `;

    elements.recipeArea.innerHTML = markup;
  }
}
