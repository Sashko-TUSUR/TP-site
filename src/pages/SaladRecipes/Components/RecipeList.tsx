import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Irecipep } from '../../../types/types'
import Recipe from './Recipe'
import s from './RecipeList.module.scss'

const RecipeList = () => {

    const [recipes, setRecipes] = useState<Irecipep[]>([])
    async function fetchIngrs() {
        try {
            const response = await axios.get<Irecipep[]>('http://localhost:8081/salad/recipes/' + globalThis.Gvegetable)
            setRecipes(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className={s.saladrecipes}>
            <div className={s.maincontainer}>
                <button className={s.button} onClick={fetchIngrs}> показать рецепты </button>
                    <Recipe recipes={recipes} />
            </div>
        </div>
    )
}

export default RecipeList