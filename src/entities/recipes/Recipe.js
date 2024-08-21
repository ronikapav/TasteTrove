import React from 'react';
import styles from './Recipe.module.scss';

const Recipe = ({ image, label, calories, ingredients }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.single_menu}>
        <div className={styles.menu_image}>
          <img src={image} alt="img" />
        </div>
        <div className={styles.menu_content}>
          <h4>
            {label}
            <span>{calories.toFixed()} kcal</span>
          </h4>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipe;