import s from './Recipe.module.scss'
import React, { FC } from 'react'
import { Irecipep } from '../../../types/types'
import ReactDOM from 'react-dom'
import { RecipeItem } from './RecipeItem';
import { useNavigate } from 'react-router-dom'

interface RecipeListProps {
  recipes: Irecipep[];
}

const SaladRecipes: FC<RecipeListProps> = ({ recipes }) => {

  const navigate = useNavigate()

  return (
    <div className={s.main}>
      {recipes.map(recipe =>
        <RecipeItem onClick={(recipe) => navigate('/recipe/' + recipe.id_recipes)} key={recipe.id_recipes} recipe={recipe} />
      )}
    </div>
  )
}

export default SaladRecipes