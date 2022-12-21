/**
 * Creates a recipe card element by using its template.
 * @param {{
 *   name: string,
 *   category: string,
 *   rating: number,
 *   preparationTime: string,
 *   image: string
 * }} recipeProperties An object that contains the recipe's properties.
 * @returns {Element} The recipe card element created.
 */
function createRecipeCard({ name, category, rating, preparationTime, image }) {
  const $template = document.querySelector('.js-template-recipe-card');
  const $recipeCard = $template.content.cloneNode(true);

  const $recipeCardName = $recipeCard.querySelector('.recipe-card-name');
  $recipeCardName.innerHTML = name;

  const $recipeCardCategory =
      $recipeCard.querySelector('.recipe-card-category');
  $recipeCardCategory.innerHTML = category;

  const $recipeCardRating = $recipeCard.querySelector('.recipe-card-rating');
  $recipeCardRating.innerHTML = rating;

  const $recipeCardPreparationTime =
      $recipeCard.querySelector('.recipe-card-preparation-time');
  $recipeCardPreparationTime.innerHTML = preparationTime;

  const $recipeCardImage = $recipeCard.querySelector('.recipe-card-image');
  $recipeCardImage.src = image;

  return $recipeCard;
}

/**
 * Adds the recipe cards elements that are inside of an array to the container
 * that corresponds to a certain query in the document.
 * @param {string} containerQuery The query to find the container.
 * @param {Element} $recipeCards The array containing the recipe cards elements.
 */
function addRecipeCardsToContainer(containerQuery, $recipeCards) {
  const $container = document.querySelector(containerQuery);
  $recipeCards.forEach(($recipeCard) => {
    $container.append($recipeCard);
  });
}

function createContainers($recipeCards) {
  var todayRecipes = [];  
  var weekRecipes = [];
  var communityRecipes = [];
  var dessertRecipes = [];
  $recipeCards.forEach(($recipeCard) => {
    if(isToday($recipeCard.date)){
      todayRecipes.push(createRecipeCard($recipeCard));
    }
    if(isDateInThisWeek($recipeCard.date)){
      weekRecipes.push(createRecipeCard($recipeCard));
    }
    if($recipeCard.category === "Dessert"){
      dessertRecipes.push(createRecipeCard($recipeCard))
    }
    communityRecipes.push(createRecipeCard($recipeCard));
  });
  addRecipeCardsToContainer('.todays-highlights-container', todayRecipes);
  addRecipeCardsToContainer('.weekly-highlights-container', weekRecipes);
  addRecipeCardsToContainer('.community-selections-container', communityRecipes);
  addRecipeCardsToContainer('.desserts-selections-container', dessertRecipes);
}

function isToday(inputDate){
  var todaysDate = new Date();
  return inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0);
}

function isDateInThisWeek(date) {
  const todayObj = new Date();
  const todayDate = todayObj.getDate();
  const todayDay = todayObj.getDay();

  // get first date of week
  const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay));

  // get last date of week
  const lastDayOfWeek = new Date(firstDayOfWeek);
  lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);

  // if date is equal or within the first and last dates of the week
  return date.setHours(0,0,0,0) >= firstDayOfWeek.setHours(0,0,0,0) 
        && date.setHours(0,0,0,0) <= lastDayOfWeek.setHours(0,0,0,0);
}

const $recipes = [
  {
    name: 'Spaghetti',
    category: 'Pasta',
    rating: 5,
    preparationTime: '45min',
    date: new Date('2022-12-18'),
    image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=\
rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop\
&w=880&q=80'
  },
  {
    name: 'Bread',
    category: 'Pasta',
    rating: 5,
    preparationTime: '10min',
    date: new Date('2022-12-16'),
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?\
auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Salad',
    category: 'Vegetables',
    rating: 5,
    preparationTime: '20min',
    date: new Date('2022-11-11'),
    image: 'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?au\
to=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Risotto Funghi',
    category: 'Italian food',
    rating: 5,
    preparationTime: '15min',
    date: new Date('2022-12-20'),
    image: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/24E650FD-4EA2-4404-8B4B-0852DAF5C9A8/Derivates/eab3823d-c310-4336-89b6-891b43b16441.jpg'
  },
  {
    name: 'Apple Pie',
    category: 'Dessert',
    rating: 5,
    preparationTime: '10min',
    date: new Date('2022-12-24'),
    image: 'https://img-global.cpcdn.com/recipes/631927057888eef1/1200x630cq70/photo.jpg'
  }
  ,
  {
    name: 'Pasteis de Nata',
    category: 'Dessert',
    rating: 5,
    preparationTime: '5min',
    date: new Date('2022-12-25'),
    image: 'https://www.pingodoce.pt/wp-content/uploads/2015/10/pastel-de-nata.jpg'
  },
  {
    name: 'Tiramissu',
    category: 'Dessert',
    rating: 5,
    preparationTime: '15min',
    date: new Date('2022-11-25'),
    image: 'https://i.shgcdn.com/8f468ab0-04c7-45ce-8462-8d772967b764/-/format/auto/-/preview/3000x3000/-/quality/lighter/'
  }
]


createContainers($recipes);


