import { FC, MouseEvent, useRef } from "react";
import { IUser, IUserProps } from "../Interfaces";
import { users } from "../users";

const Login: FC<IUserProps> = ({ setUser }) => {
  const userField = useRef<HTMLInputElement>(null)

  const isUser = (user: IUser): user is IUser => {
    return (user as IUser) !== undefined
  }

  const handleLogin = (e: MouseEvent) => {
    e.preventDefault()
    if (userField) {
      const foundUser = users.filter(user => user.username.toLowerCase() === userField.current?.value.toLowerCase())
      // foundUser ? setUser(foundUser) : console.log("Could not find user")
      if (isUser(foundUser[0])) {
        setUser(foundUser[0] as IUser)
      } else {
        console.log("No user found")
      }
    }
  }

  return (
    <form className="flex items-center justify-center h-2/3 p-3">
      <div className="flex">
        <span className="flex flex-col">
          <input type="text" ref={userField} placeholder="Username..." className="border-[1px] border-black rounded-tl-lg p-1" /> 
          <input type="password" placeholder="Password..." className="border-[1px] border-black border-t-0 rounded-bl-lg p-1" /> 
        </span>
        <button type="submit" onClick={handleLogin} className="border-[1px] border-black border-l-0 rounded-r-lg bg-slate-400 p-2">
          Login
        </button>
      </div>
    </form>
  )
}

export default Login;
