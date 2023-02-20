import { FormEvent, useRef } from 'react'
import { IRecipePreview } from '../Interfaces'

interface Props {
  setRecipes: (recipes: IRecipePreview[]) => void;
}

const API_KEY = import.meta.env.VITE_API_KEY
const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=`

const SearchContainer = ({ setRecipes }: Props) => {
  const ingredientField = useRef<HTMLInputElement>(null)

  const fetchRecipes = async (e: FormEvent) => {
    e.preventDefault()
    if (ingredientField.current) {
      const res = await fetch(URL+ingredientField.current.value)
      const { results } = await res.json()
      setRecipes(results)
    } 
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <form onSubmit={fetchRecipes}>
        <input type="text" ref={ingredientField} placeholder='Enter an ingredient...' className='p-2 focus:outline-none' />
        <button type='submit' className='bg-slate-300 h-full p-2'>Search</button>
      </form>
    </div>
  )
}

export default SearchContainer;
