import React from 'react';
import styles from './RecipeList.module.scss';
import Recipe from './Recipe';

const RecipeList = ({ recipes }) => {
  if (!recipes) {
    return null;
  }

  return (
    <div className={styles.recipes_container}>
      {recipes.map((element, index) => (
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
