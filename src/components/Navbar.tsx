import { FC } from "react";
import { IUserProps } from "../Interfaces";

const Navbar: FC<IUserProps> = ({ user }) => {

  console.log(user)

  return (
    <div className="flex justify-between mx-3 mb-2">
      <h2>Inside navbar</h2>
      <span className="space-x-3">
        <a href="" className="border-[1px] border-black rounded-2xl bg-slate-400 p-1">
          Login
        </a>
        <a href="" className="border-[1px] border-black rounded-2xl bg-slate-400 p-1">
          Signup
        </a>
      </span>
    </div>
  )
}

export default Navbar;
