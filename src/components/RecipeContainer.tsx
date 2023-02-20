import { IRecipePreview } from "../Interfaces";
import RecipeItem from "./RecipeItem";

interface Props {
  recipes: IRecipePreview[];
}

const RecipeContainer = ({ recipes }: Props) => {

  const displayRecipes = recipes.map((recipe: RecipePreview) => <RecipeItem key={recipe.id} recipe={recipe} />)
  
  return (
    <div className="flex flex-wrap justify-center bg-white rounded-xl mt-3 w-3/4">
      {displayRecipes}
    </div>
  )
}

export default RecipeContainer;
