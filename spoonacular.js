let apiKey = "cff15fd5c68a4190b152f91d1c8785a0"; // API Key
let recipeName = $("#dish").val();
let cuisineInput = $("#cuisine").val();
let includedIngredients = $("#include").val();
let excludedIngredients = $("#exclude").val();
let searchBtn = $("#search-button");

// event listeners 
searchBtn.addEventListener('click', getRecipes);

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
    console.log(response);
  });
}
searchBtn.click(spoonacularQuery);

// fetch API
function getRecipes(){
  let searchInputTxt = document.getElementById
  ('search-input').value.trim();
  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=cff15fd5c68a4190b152f91d1c8785a0=${searchInputTxt}`)
  .then(response => response.json())
  .then(data => {
    let html = "";
    if(data.meals){
      data.meals.forEach(meal => {
        html += `
          <div class = "meal-item" data-id = "${meal.idMeal}">
          <div class = "meal-img">
          <img src = "${meal.strMealThumb}" alt = "food">
          </div>
          <div class = "meal-name">
          <h3>${meal.strMeal}</h3>
          <a href = "#" class = "recipe-btn">Get Recipe</a>
          </div>
          </div>
        `;
      });
    } else {
      html = "Sorry, we didn't find any meal!"
    }

  })
  getRecipes.innerHTML = html;
}



//   method:'GET',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     recipe: 1
//   })
// }).then(res => {
//   return res.json()
// })
//   .then(data => console.log(data))
//   .catch(error => console.log("ERROR"))
// let recipeIdeas = document.querySelector("#recipe");

