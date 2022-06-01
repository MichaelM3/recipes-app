import { FC, useState } from "react";
import { IRecipe } from "../Interfaces";
import Header from "./Header";
import SearchContainer from "./SearchContainer";
import RecipeContainer from "./RecipeContainer";

const Homepage: FC = () => {

  const [recipes, setRecipes] = useState<IRecipe[]>([])

  return (
    <div className="flex flex-col items-center h-full pt-3 bg-bgPic bg-cover bg-center bg-no-repeat">
      <Header />
      <SearchContainer setRecipes={setRecipes} />
      <RecipeContainer recipes={recipes} />
    </div>
  )
}

export default Homepage;
