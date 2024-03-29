import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import defaultImage from "../default.png"

const Navbar = () => {
  const nav = useNavigate()
  const { user, setUser } = useContext(UserContext)

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem("user")
    nav("/")
  }

  return (
    <>
      { user ?
        <div className="flex justify-between mx-3 pb-2 border-b-white border-b-[1px]">
          <span className="flex space-x-3">
            <h2 className="text-white">{user.username}</h2>
            <img src={user.image ? user.image : defaultImage} alt="Profile Avatar" className="object-contain w-[25px] h-[25px] rounded-full" />
          </span>
          <Link to="/" className="text-white bg-slate-400 rounded-lg p-1">Home</Link>
          <span className="space-x-3">
            <Link to={`/profile/${user.username}`} className="rounded-2xl bg-slate-400 p-1 text-white">
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
            <Link to="/register" className="rounded-2xl bg-slate-400 p-1 text-white">
              Signup
            </Link>
          </span>
        </div>
      }
    </>
  )
}

export default Navbar;
