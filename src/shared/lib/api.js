const MY_ID = '99c472aa';
const MY_KEY = '3178d393ba6f832673117b8d79bf50d5';

export const getRecipes = async (query) => {
  const response = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${MY_ID}&app_key=${MY_KEY}`
  );
  const data = await response.json();
  return data;
};