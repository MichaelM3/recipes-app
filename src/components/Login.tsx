import { useRef, FormEvent } from "react";
import { IUser } from "../Interfaces";
import { useNavigate } from "react-router-dom";

interface Props {
  setUser: (user: IUser) => void;
}

const Login = ({ setUser }: Props) => {
  const userField = useRef<HTMLInputElement>(null)
  const passwordField = useRef<HTMLInputElement>(null)
  const nav = useNavigate()

  // Will be changed to real login auth at a later date
  const handleLoginSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (userField) {
      const res = await fetch(`http://localhost:4000/users`)
      const data = await res.json()
      const fetchedUser = data.find((user: IUser) => user.username.toLowerCase() === userField.current?.value.toLowerCase())
      if (fetchedUser && fetchedUser.password === passwordField.current?.value) {
        setUser(fetchedUser)
        localStorage.setItem("user", JSON.stringify(fetchedUser))
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
          <input type="password" ref={passwordField} placeholder="Password..." className="border-[1px] border-black border-t-0 rounded-bl-lg p-1" /> 
        </span>
        <button type="submit" className="border-[1px] border-black border-l-0 rounded-r-lg bg-slate-400 p-2">
          Login
        </button>
      </div>
    </form>
  )
}

export default Login;
