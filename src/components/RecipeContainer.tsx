import { FC } from "react";
import { IRecipe, IRecipeContainerProps } from "../Interfaces";
import RecipeItem from "./RecipeItem";

const RecipeContainer: FC<IRecipeContainerProps> = ({ recipes }) => {

  const displayRecipes = recipes.map((recipe: IRecipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
  
  return (
    <div className="flex items-center h-1/4 w-2/3 mt-3 bg-white border-r-[1px] border-r-black overflow-x-scroll">
      {displayRecipes}
    </div>
  )
}

export default RecipeContainer;
