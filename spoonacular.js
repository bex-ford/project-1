// API Key
let apiKey = "cff15fd5c68a4190b152f91d1c8785a0";
let recipeName = $("#dish").val();
let cuisineInput = $("#cuisine").val();
let includedIngredients = $("#include").val();
let excludedIngredients = $("#exclude").val();
let searchButton = $("#search-button");

function spoonacularQuery() {
  let queryUrl =
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=" +
    apiKey +
   "&diet=glutenfree,vegetarian";

if (cuisineInput){
  queryUrl += "&cuisine=" + cuisineInput
}
if (recipeName){
  queryUrl += "&query=" +
  recipeName
}
if (includedIngredients){
  queryUrl += "&includeIngredients=" +
  includedIngredients
}
if (excludedIngredients){
  queryUrl += "&excludeIngredients=" + excludedIngredients
}

  console.log(queryUrl);
  $.ajax({
    method: "GET",
    url: queryUrl,
  }).done(function (response) {
    console.log(response);
  });
}
searchButton.click(spoonacularQuery);

// diet ----         diet=gluten,vegetarian
// intolerances - gluten
// includeIngredients
// excludeIngredients

// create AJAX call
