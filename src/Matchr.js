import React from 'react';

import Recipes from "./components/Recipes"

import Recipe from "./components/Recipe";

function Matchr({match}) {
    const foundService = recipes.find(recipe => recipe.id === match.params.recipeId);
    return <Recipe {...foundService} />
}

export default Matchr;
