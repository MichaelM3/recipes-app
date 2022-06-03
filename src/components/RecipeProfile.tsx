import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IFullRecipe } from "../Interfaces";

const API_KEY = import.meta.env.VITE_API_KEY

const RecipeProfile: FC = () => {
  const [recipe, setRecipe] = useState<IFullRecipe | null>(null)
  const location = useLocation()

  const fetchRecipe = async (id: number) => {
    const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=false`)
    const { title, image, summary } = await res.json()
    setRecipe({ id, title, image, summary })
  }
  
  useEffect(() => {
    fetchRecipe(location.state as number)
  }, [])

  console.log(recipe);
  

  return (
    <div>
      
    </div>
  )
}

export default RecipeProfile;
