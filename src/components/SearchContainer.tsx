import { FC, FormEvent, useRef } from 'react'
import { ISearchContainerProps } from '../Interfaces'

const API_KEY = import.meta.env.VITE_API_KEY
const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=`

const SearchContainer: FC<ISearchContainerProps> = ({ setRecipes }) => {
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
        <input type="text" ref={ingredientField} placeholder='Enter an ingredient...' className='p-2' />
        <button type='submit' className='bg-slate-300 h-full p-2'>Search</button>
      </form>
    </div>
  )
}

export default SearchContainer;
