import { FC } from "react";
import { INavbarProps } from "../Interfaces";
import { Link, useNavigate } from "react-router-dom";

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
        <div className="flex justify-between mx-3 pb-2">
          <span className="flex space-x-3">
            <h2 className="text-white">{user.username}</h2>
            <img src={user.profileImg} alt="Profile Avatar" className="object-contain w-[25px] h-[25px] rounded-full" />
          </span>
          <Link to="/" className="text-white bg-slate-400 rounded-lg p-1">Home</Link>
          <span className="space-x-3">
            <Link to={`/users/${user.id}`} className="rounded-2xl bg-slate-400 p-1 text-white">
              Profile
            </Link>
            <Link to="/" onClick={handleLogout} className="rounded-2xl bg-slate-400 p-1 text-white">
              Logout
            </Link>
          </span>
        </div>
        :
        <div className="flex justify-between mx-3 mb-2 text-white">
          <h2>First Time?</h2>
          <span className="space-x-3">
            <Link to="/login" className="rounded-2xl bg-slate-400 p-1 text-white">
              Login 
            </Link>
            <Link to="/signup" className="rounded-2xl bg-slate-400 p-1 text-white">
              Signup
            </Link>
          </span>
        </div>
      }
    </>
  )
}

export default Navbar;
