import React from 'react';
import Recipe from './Recipe';
import styles from './RecipeList.module.scss';

const RecipeList = ({ recipes }) => {
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
