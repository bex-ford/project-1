let apiKey = "cff15fd5c68a4190b152f91d1c8785a0"; // API Key
let recipeName = $("#dish").val();
let cuisineInput = $("#cuisine").val();
let includedIngredients = $("#include").val();
let excludedIngredients = $("#exclude").val();
let searchBtn = $("#search-button");

function spoonacularQuery() {
  let queryUrl =
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=" +
    apiKey +
    "&diet=glutenfree,vegetarian";

  if (cuisineInput) {
    queryUrl += "&cuisine=" + cuisineInput;
  }
  if (recipeName) {
    queryUrl += "&query=" + recipeName;
  }
  if (includedIngredients) {
    queryUrl += "&includeIngredients=" + includedIngredients;
  }
  if (excludedIngredients) {
    queryUrl += "&excludeIngredients=" + excludedIngredients;
  }

  // created a AJAX call
  console.log(queryUrl);
  $.ajax({
    method: "GET",
    url: queryUrl,
  }).done(function (response) {
    $("dish").text(JSON.stringify(response));
    console.log(response);
  });
}
searchBtn.click(spoonacularQuery);

// fetch API
function getRecipeName(){
  let searchInputTxt = document.getElementById
  ("dish").value.trim();
  console.log(searchInputTxt);
  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=cff15fd5c68a4190b152f91d1c8785a0=${searchInputTxt}`)
  .then(response => response.json())
  .then(data => {
    let html = "";
    if(data.recipeName){
      data.recipeName.forEach(recipeName => {
        html += `
          <div class = "recipe-item" data-id = "${recipeName.idRecipe}">
          <div class = "recipe-img">
          <img src = "${recipeName.strRecipeThumb}" alt = "food">
          </div>
          <div class = "recipe-name">
          <h3>${recipeName.strRecipe}</h3>
          <a href = "#" class = "recipe-btn">Get Recipe</a>
          </div>
          </div>
        `;
      });
    } else {
      html = "Sorry, we didn't find your recipe!"
    }

  })
  getRecipeName.innerHTML = html;
}

