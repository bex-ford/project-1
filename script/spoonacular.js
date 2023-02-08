// Assign API Key to a variable
var apiKey = "417b0ee574024fdba584113ed74ce282"; 

// Store input values in variables
var recipeName = $("#dish").val();
var cuisineInput = $("#cuisine").val();
var includedIngredients = $("#include").val();
var excludedIngredients = $("#exclude").val();

// Store search button and recipe list as variables
const searchBtn = $("#search");
const recipeList = $("#recipe");

// Function to query API for recipes 
function spoonacularQuery() {
 
// Store input values in variables
  var recipeName = $("#dish").val();
  var cuisineInput = $("#cuisine").val();
  var includedIngredients = $("#include").val();
  var excludedIngredients = $("#exclude").val();

// Build API url based on inputs
  var queryUrl =
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=" +
    apiKey +
    "&diet=glutenfree,vegetarian";

// Add cuisine input to API url if it exists
  if (cuisineInput) {
    queryUrl += "&cuisine=" + cuisineInput;
  }

// Add recipe name input to API url if it exists
  if (recipeName) {
    queryUrl += "&query=" + recipeName;
  }

// Add included/excluded ingredients input to API url if it exists
  if (includedIngredients) {
    queryUrl += "&includeIngredients=" + includedIngredients;
  }
  if (excludedIngredients) {
    queryUrl += "&excludeIngredients=" + excludedIngredients;
  }

 // Make AJAX call to API
  $.ajax({
    method: "GET",
    url: queryUrl,
  }).done(function (response) {
    // Build HTML template for each recipe and display the results
    // console.log(response)
    let html = "";

    if (response.results) {
      response.results.slice(0,6).forEach((recipe) => {
        html += `
          <div class="recipe-card">
            <img class="recipe-card-img" src="${recipe.image}" alt="food">
            <div class="recipe-card-info">
              <p class="recipe-card-title">${recipe.title}</p>
              <button class="recipe-card-btn" id="get-recipe-${recipe.id}" >Get Recipe</button> 
            </div>
          </div>
      `;
      getsource(recipe.id)
       // Add recipe HTML to recipe list
        $("#recipe").append(html);
        // Reset HTML variable
        html = "";
      });
    } else {
      // If no recipes found, display error message
      html = "Sorry, we didn't find your recipe!";
      $("#recipe").html(html);
    }
  });
}

// Trigger spoonacularQuery function when search button is clicked
searchBtn.click(function(){
  // Reset the receipelist inner HTML to an empty string
  recipeList.html("");
  spoonacularQuery();
});

function getsource(id) {
  let srcUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=417b0ee574024fdba584113ed74ce282`;

  $.ajax({
    method: "GET",
    url: srcUrl,
  }).done(function (response) {
    var recipeLink = response.sourceUrl;
    // Update the link of the button with the recipe source link
    $(`#get-recipe-${id}`).attr("data-url", recipeLink);
    $(`#get-recipe-${id}`).click(function() {
      window.open(recipeLink, "_blank");
    });
  });
}