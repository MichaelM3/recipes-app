import { FC } from "react";
import { IUserProps } from "../Interfaces";

const Navbar: FC<IUserProps> = ({ user }) => {

  console.log(user)

  return (
    <>
      { user ?
        <div className="flex justify-between mx-3 mb-2">
          <span className="flex space-x-3">
            <h2>{user.username}</h2>
            <img src={user.profileImg} alt="Profile Avatar" className="object-contain w-[25px] h-[25px] rounded-full" />
          </span>
          <span className="space-x-3">
            <a href="" className="border-[1px] border-black rounded-2xl bg-slate-400 p-1">
              Profile
            </a>
            <a href="" className="border-[1px] border-black rounded-2xl bg-slate-400 p-1">
              Logout
            </a>
          </span>
        </div>
        :
        <div className="flex justify-between mx-3 mb-2">
          <h2>First Time?</h2>
          <span className="space-x-3">
            <a href="" className="border-[1px] border-black rounded-2xl bg-slate-400 p-1">
              Login 
            </a>
            <a href="" className="border-[1px] border-black rounded-2xl bg-slate-400 p-1">
              Signup
            </a>
          </span>
        </div>
      }
    </>
  )
}

export default Navbar;
