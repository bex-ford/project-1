var apiKey = "cff15fd5c68a4190b152f91d1c8785a0"; // API Key
var recipeName = $("#dish").val();
console.log(recipeName)
var cuisineInput = $("#cuisine").val();
var includedIngredients = $("#include").val();
var excludedIngredients = $("#exclude").val();
const searchBtn = $("#search-button");
const recipeList = $("#recipe");

function spoonacularQuery() {
  var recipeName = $("#dish").val();
  var queryUrl =
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
    // $("dish").text(JSON.stringify(response));
    console.log(response);
  });
}
searchBtn.click(spoonacularQuery);


// fetch API
function getRecipeList() {
  let searchInputTxt = document.getElementById("dish").value.trim();
  console.log(searchInputTxt);
  fetch( 
  `https://api.spoonacular.com/recipes/complexSearch?apiKey=cff15fd5c68a4190b152f91d1c8785a0&diet=glutenfree,vegetarian&cuisine=italian&includeIngredients=&excludeIngredients=`
  )
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      if (data.recipe) {
        data.recipe.forEach((recipe) => {
          html += `
        <div class = "recipe-item" data-id ="${results.title}">
        <div class = "recipe-img">
          <img src = "${results.image}" alt = "food">
        </div>
        // <a href = "#" class = "recipe-btn">Get Recipe</a>
        </div>
      </div>
       
        `;
        });
      } else {
        html = "Sorry, we didn't find your recipe!";
      }

    });
document.getElementById("getRecipeList").innerHTML = html;
}
getRecipeList()