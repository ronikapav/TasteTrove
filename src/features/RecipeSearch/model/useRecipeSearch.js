import { useState, useEffect } from 'react';
import { getRecipes } from '../../../shared/lib/api';

export const useRecipeSearch = () => {
  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [mySubmitted, setMySubmitted] = useState('avocado');

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipes = await getRecipes(mySubmitted);
      setMyRecipes(recipes.hits);
    };
    fetchRecipes();
  }, [mySubmitted]);

  const handleSearch = (e) => {
    setMySearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMySubmitted(mySearch);
  };

  return {
    mySearch,
    myRecipes,
    handleSearch,
    handleSubmit,
  };
};