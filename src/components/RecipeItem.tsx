import { FC } from "react";
import { Link } from "react-router-dom";
import { IRecipeItemProps } from "../Interfaces";

const RecipeItem: FC<IRecipeItemProps> = ({ recipe: { id, title, image } }) => {
  return (
    <div className="group flex flex-col flex-wrap justify-between w-[250px] items-center text-center border-[1px] p-3 hover:bg-opacity-90 hover:cursor-pointer">
      <h3>{title}</h3> 
      <Link to={`recipes/${id}`} className="relative top-28 invisible group-hover:visible font-bold text-lg">
        View Recipe
      </Link>
      <img src={image} alt="Food" className="group-hover:opacity-20 object-cover w-[200px] h-[200px] rounded-full" />
    </div>
  )

}
export default RecipeItem;
