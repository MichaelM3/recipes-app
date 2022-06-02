import { FC } from "react";
import { IRecipe, IRecipeContainerProps } from "../Interfaces";
import RecipeItem from "./RecipeItem";

const RecipeContainer: FC<IRecipeContainerProps> = ({ recipes }) => {

  const displayRecipes = recipes.map((recipe: IRecipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
  
  return (
    <div className="flex flex-wrap justify-center bg-white rounded-xl mt-3 w-3/4">
      {displayRecipes}
    </div>
  )
}

export default RecipeContainer;
