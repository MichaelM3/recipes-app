import { FC } from "react";
import { IRecipeItemProps } from "../Interfaces";

const RecipeItem: FC<IRecipeItemProps> = ({ recipe: { title, image } }) => {
  return (
    <div className="flex flex-col flex-wrap w-[250px] items-center text-center border-[1px] boreder-black p-3">
      <h3>{title}</h3> 
      <img src={image} alt="Food" className="object-cover w-[200px] h-[200px] rounded-full" />
    </div>
  )

}
export default RecipeItem;
