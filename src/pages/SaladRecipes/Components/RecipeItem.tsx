import React, { FC } from 'react'
import { Irecipep } from '../../../types/types'
import s from './RecipeItem.module.scss'

interface RecipeItemProps {
  recipe: Irecipep;
  onClick: (recipes: Irecipep) => void;
}

export const RecipeItem: FC<RecipeItemProps> = ({ recipe, onClick }) => {
  return (
    <div onClick={() => onClick(recipe)} className={s.recipe}>
      <div className={s.block123}>
        <p> {recipe.id_recipes} {recipe.name} </p>
      </div>
    </div>

  )
}
