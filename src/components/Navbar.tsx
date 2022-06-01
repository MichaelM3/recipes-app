import { FC } from "react";
import { INavbarProps } from "../Interfaces";
import { Route, Link, useNavigate } from "react-router-dom";

const Navbar: FC<INavbarProps> = ({ user, setUser }) => {
  const nav = useNavigate()

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem("user")
    nav("/")
  }

  return (
    <>
      { user ?
        <div className="flex justify-between mx-3 mb-2">
          <span className="flex space-x-3">
            <h2>{user.username}</h2>
            <img src={user.profileImg} alt="Profile Avatar" className="object-contain w-[25px] h-[25px] rounded-full" />
          </span>
          <span className="space-x-3">
            <Link to="/user" className="border-[1px] border-black rounded-2xl bg-slate-400 p-1">
              Profile
            </Link>
            <Link to="/" onClick={handleLogout} className="border-[1px] border-black rounded-2xl bg-slate-400 p-1">
              Logout
            </Link>
          </span>
        </div>
        :
        <div className="flex justify-between mx-3 mb-2">
          <h2>First Time?</h2>
          <span className="space-x-3">
            <Link to="/login" className="border-[1px] border-black rounded-2xl bg-slate-400 p-1">
              Login 
            </Link>
            <Link to="/signup" className="border-[1px] border-black rounded-2xl bg-slate-400 p-1">
              Signup
            </Link>
          </span>
        </div>
      }
    </>
  )
}

export default Navbar;
