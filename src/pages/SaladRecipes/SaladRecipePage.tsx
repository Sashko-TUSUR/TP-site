import axios from "axios"
import { FC, useEffect, useMemo, useState } from "react"
import { Irecipep } from "../../types/types"
import { useParams, useNavigate } from 'react-router-dom'
import s from './SaladRecipePage.module.scss'
import React from "react"

type RecipePageParams = {
  id: string;
}

const SaladRecipePage: FC = () => {

  useEffect(() => {
    fetchRecipe()
  })

  const [recipe, setRecipe] = useState<Irecipep | null>(null)
  const { id } = useParams<RecipePageParams>();
  const navigate = useNavigate()

  console.log(id)

  async function fetchRecipe() {
    try {
      const response = await axios.get<Irecipep>('http://localhost:8081/salad/recipe/' + id,
      )
      setRecipe(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div className={s.container}>
      <div className={s.box}>
        <div className={s.leftside}>
          <div className={s.title1}>
            {recipe?.name}
          </div>
          <div className={s.title3}>
            Приготовление:
          </div>
          <div className={s.title2}>
            {recipe?.recipes}
          </div>
          <div className={s.title3}>

          </div>
          <div className={s.title2}>
            {recipe?.ingredients.name}
          </div>
          <button className={s.button} onClick={() => navigate('/salad')}> Назад </button>
        </div>
        <div className={s.rightside}>
        </div>
      </div>
    </div >
  )
}

export default React.memo(SaladRecipePage);