import { FC, useRef, FormEvent } from "react";
import { ILoginProps, IUser } from "../Interfaces";
import { useNavigate } from "react-router-dom";

const Login: FC<ILoginProps> = ({ setUser }) => {
  const userField = useRef<HTMLInputElement>(null)
  const nav = useNavigate()

  const handleLoginSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (userField) {
      const res = await fetch(`http://localhost:4000/users`)
      const data = await res.json()
      const fetchedUser = data.find((user: IUser) => user.username.toLowerCase() === userField.current?.value.toLowerCase())
      if (fetchedUser) {
        setUser(fetchedUser)
        nav("/")
      } else {
        console.log("No user found")
      }
    }
  }

  return (
    <form onSubmit={handleLoginSubmit} className="flex items-center justify-center h-2/3 p-3">
      <div className="flex">
        <span className="flex flex-col">
          <input type="text" ref={userField} placeholder="Username..." className="border-[1px] border-black rounded-tl-lg p-1" /> 
          <input type="password" placeholder="Password..." className="border-[1px] border-black border-t-0 rounded-bl-lg p-1" /> 
        </span>
        <button type="submit" className="border-[1px] border-black border-l-0 rounded-r-lg bg-slate-400 p-2">
          Login
        </button>
      </div>
    </form>
  )
}

export default Login;
