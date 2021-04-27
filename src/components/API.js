const apiKey = "c8affffc18d74c348dd96a2cf62b801a";
//const apiKey = "9f2dea2db0334159a87235570ef3aa6a";
//const apiKey = "4468193b174649a0bffd59d82d6f3e2a";
export const fetchRecipes = (searchString) => {
    return fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey='+apiKey+'&query='+searchString)
    .then(response => response.json())
}

export const fetchRecipe = (id) => {
    return fetch('https://api.spoonacular.com/recipes/'+id+'/information?apiKey='+apiKey)
    .then(response => response.json())
}

export const searchAutocomplete = (query, number) =>{
    return fetch('https://api.spoonacular.com/recipes/autocomplete?apiKey='+apiKey+'&number='+number+'&query='+query)
    .then(response => response.json())
}
