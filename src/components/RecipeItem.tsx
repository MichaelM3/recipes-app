import { FC } from "react";
import { IRecipeItemProps } from "../Interfaces";

const RecipeItem: FC<IRecipeItemProps> = ({ recipe: { title, image } }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white border-[1px] border-black border-r-0 h-full">
      <h2>{title}</h2> 
      <img src={image} alt="Food" className="object-contain w-[100px] h-[100px]" />
    </div>
  )

}
export default RecipeItem;
