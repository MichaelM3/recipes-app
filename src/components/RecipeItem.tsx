import { Link } from "react-router-dom";

interface Props {
  recipe: IRecipePreview;
}

const RecipeItem = ({ recipe: { id, title, image } }: Props) => {
  return (
    <Link
      to={`/recipes/${id}`} state={id} 
      className="group flex flex-col flex-wrap justify-between w-[250px] items-center text-center border-[1px] p-3 hover:bg-opacity-90 hover:cursor-pointer"
    >
      <h3>{title}</h3> 
      <span className="relative top-28 invisible group-hover:visible font-bold text-lg">View Recipe</span>
      <img src={image} alt="Food" className="group-hover:opacity-20 object-cover w-[200px] h-[200px] rounded-full" />
    </Link>
  )

}
export default RecipeItem;
