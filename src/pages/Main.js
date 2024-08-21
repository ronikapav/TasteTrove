import React from 'react';
import RecipeSearch from '../features/search/ui/RecipeSearch';
import RecipeList from '../entities/recipes/RecipeList';

function Main() {
  return (
    <div>
      <RecipeSearch />
      <RecipeList />
    </div>
  );
}

export default Main;