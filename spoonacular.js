// Assign API Key to a variable
var apiKey = "cff15fd5c68a4190b152f91d1c8785a0"; 

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
    console.log(response)
    let html = "";

    if (response.results) {
      response.results.forEach((recipe) => {
        html += `
        <div class = "recipe-item" data-id ="${recipe.id}">
          <div class = "recipe-img">
            <img src = "${recipe.image}" alt = "food">
          </div>
          <p class = "recipe-title">${recipe.title}</p>
          <button data-url=localhost id="get-recipe-${recipe.id}" getrecipe(document.getElementById("sourceLink").value">Get Recipe</button>
        <a href ="getsource(recipe.id)"class="btn btn-danger video-btn"></a>
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
function getsource(id){
  let srcUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=cff15fd5c68a4190b152f91d1c8785a0`;
    $.ajax({
      method: "GET",
      url: srcUrl,
    }).done(function (responseUrl) {
      success = function(res) {
          document.getElementById("get-recipe-${id}").innerHTML=res.sourceUrl
          document.getElementById("get-recipe-${id}").setAttribute("data-url",res.sourceUrl);
    
    }
    });
}

// Trigger spoonacularQuery function when search button is clicked
searchBtn.click(spoonacularQuery);

// event deligation look into container for a button for every button onlick 
// or use anchor tag so it looks like a button - set HREF 
// then you will get the data URL off the button 
// then open new tab to link to the website 