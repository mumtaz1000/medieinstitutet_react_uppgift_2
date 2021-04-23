const RecipeList = ({recipe}) => {
    return ( 
        <>
<div class="px-4 py-8 max-w-md mx-auto">
    <img id="main-image"
    src={recipe.image}
    alt="Pizza" />
    <h1 id="title">{recipe.title}</h1>
    <div id="description">
    {recipe.description}</div>
    <h2>Instructions</h2>
    <div id="instructions">{recipe.instructions}</div>
</div>
        </>
     );
}
 
export default RecipeList;