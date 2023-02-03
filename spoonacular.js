// API Key
let apiKey = "cff15fd5c68a4190b152f91d1c8785a0";
let dishInput = $("#dish").val();
let cuisineInput = $("#cuisine").val();
let includedIngredients = $("#include").val();
let excludedIngredients = $("#exclude").val();

let queryUrl =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=" +
  apiKey +
  "&cuisine=" +
  cuisineInput +
  "&query=" +
  recipeName +
  "&includeIngredients=" +
  includedIngredients
  "&excludeIngredients=" +
  excludedIngredients;


// diet ----         diet=gluten,vegetarian
// intolerances - gluten
// includeIngredients
// excludeIngredients

// create AJAX call
