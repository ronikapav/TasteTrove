import React from 'react';
import { useRecipeSearch } from '../../features/search/model/useRecipeSearch';
import Recipe from './Recipe';
import styles from './RecipeList.module.scss';

const RecipeList = () => {
  const { myRecipes } = useRecipeSearch();

  return (
    <div className={styles.recipes_container}>
      {myRecipes.map((element, index) => (
        <div key={index} className={styles.recipe}>
          <Recipe
            image={element.recipe.image}
            label={element.recipe.label}
            calories={element.recipe.calories}
            ingredients={element.recipe.ingredientLines}
          />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;