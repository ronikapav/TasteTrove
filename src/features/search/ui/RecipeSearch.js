import { useRecipeSearch } from '../model/useRecipeSearch';
import Input from '../../../shared/ui/Input/Input';
import Button from '../../../shared/ui/Button/Button';
import Recipe from '../../../entities/recipes/Recipe';
import styles from './RecipeSearch.module.scss';

const RecipeSearch = () => {
  const { mySearch, myRecipes, handleSearch, handleSubmit } = useRecipeSearch();

  return (
    <div className={styles.main}>
      <div className={styles.section_title}>
        <h1>
          <span>Discover real flavor treasures within this app</span> Taste Trove
        </h1>
        <form className={styles.search} onSubmit={handleSubmit}>
          <Input placeholder="Enter the ingredient..." type="text" onChange={handleSearch} value={mySearch} />
          <Button onClick={handleSubmit} type="submit">
            Find
          </Button>
        </form>
      </div>
      <div className={styles.recipes_container}>
        {myRecipes.map((element, index) => (
          <div key={index} className={styles.recipe}>
            <Recipe image={element.recipe.image} label={element.recipe.label} calories={element.recipe.calories} ingredients={element.recipe.ingredientLines} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;

//
/*import React from 'react';
import { useRecipeSearch } from '../model/useRecipeSearch';
import Input from '../../../shared/ui/Input/Input';
import Button from '../../../shared/ui/Button/Button';
import styles from './RecipeSearch.module.scss';

const RecipeSearch = () => {
  const { mySearch, handleSearch, handleSubmit } = useRecipeSearch();

  return (
    <div className={styles.main}>
      <div className={styles.section_title}>
        <h1>
          <span>Discover real flavor treasures within this app</span> Taste Trove
        </h1>
        <form className={styles.search} onSubmit={handleSubmit}>
          <Input placeholder="Enter the ingredient..." type="text" onChange={handleSearch} value={mySearch} />
          <Button type="submit">
            Find
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RecipeSearch;*/