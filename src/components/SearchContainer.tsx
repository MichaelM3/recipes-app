import { FC, FormEvent, useRef } from 'react'

const API_KEY = import.meta.env.VITE_API_KEY
const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=`

const SearchContainer: FC = () => {
  const ingredientField = useRef<HTMLInputElement>(null)

  const fetchRecipes = async (e: FormEvent) => {
    e.preventDefault()
    if (ingredientField.current) {
      const res = await fetch(URL+ingredientField.current.value)
      const data = await res.json()
      console.log(data)
    } 
  }

  return (
    <div className='flex flex-col items-center justify-center h-2/3'>
      <form onSubmit={fetchRecipes}>
        <input type="text" ref={ingredientField} placeholder='Enter an ingredient...' className='p-2' />
        <button type='submit' className='bg-slate-300 h-full p-2'>Search</button>
      </form>
    </div>
  )
}

export default SearchContainer;
