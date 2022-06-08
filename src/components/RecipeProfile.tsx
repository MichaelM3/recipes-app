import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IFullRecipe } from "../Interfaces";

const API_KEY = import.meta.env.VITE_API_KEY

const RecipeProfile: FC = () => {
  const [recipe, setRecipe] = useState<IFullRecipe | null>(null)
  const location = useLocation()

  const fetchRecipe = async (id: number) => {
    const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=false`)
    const { title, image, summary, extendedIngredients } = await res.json()
    const ingredients = extendedIngredients.map((ingredient: any) => ingredient.original) // Only pulling recipe instruction from ingredient object
    setRecipe({ id, title, image, summary, ingredients })
  }
  
  useEffect(() => {
    fetchRecipe(location.state as number)
  }, [])

  const displayIngredients = recipe?.ingredients.map((ingredient: string, index: number) => <li className="text-white" key={index}>{ingredient}</li>)

  console.log(recipe);
  
  return (
    <div className="flex items-start justify-around h-full mt-9">
      <div className="w-1/4">
        <h1 className="text-white text-3xl font-bold">{recipe?.title}</h1>
        <hr />
        <p className="text-white">{recipe?.summary.replace( /(<([^>]+)>)/ig, "")}</p>
      </div>
      <img src={recipe?.image} alt="Food" />
      <div>
        <h2 className="text-white text-3xl">Ingredients</h2>
        <ul className="list-disc space-y-4">
          <hr />
          {displayIngredients}
        </ul>
      </div>
    </div>
  )
}

export default RecipeProfile;
