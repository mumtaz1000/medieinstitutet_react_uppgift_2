const apiKey = "9f2dea2db0334159a87235570ef3aa6a";
export const fetchRecipes = (searchString) => {
    return fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey='+apiKey+'&query='+searchString)
    .then(response => response.json())
}

export const fetchRecipe = (id) => {
    return fetch('https://api.spoonacular.com/recipes/'+id+'/information?apiKey='+apiKey)
    .then(response => response.json())
}