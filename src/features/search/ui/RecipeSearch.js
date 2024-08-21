import React from 'react';
import { useRecipeSearch } from '../model/useRecipeSearch';
import Input from '../../../shared/ui/Input/Input';
import Button from '../../../shared/ui/Button/Button';
import RecipeList from '../../../entities/recipes/RecipeList';
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
      <RecipeList recipes={myRecipes} />
    </div>
  );
};

export default RecipeSearch;