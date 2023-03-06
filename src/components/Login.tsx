import { useRef, FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Login = () => {
    const { user, setUser } = useContext(UserContext)
    const userField = useRef<HTMLInputElement>(null)
    const passwordField = useRef<HTMLInputElement>(null)
    const nav = useNavigate()

    // Will be changed to real login auth at a later date
    const handleLoginSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (userField) {
            const res = await fetch(`http://localhost:8000/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: userField.current?.value,
                    password: passwordField.current?.value
                })
            })
            const data = await res.json()
            if (data) {
                setUser(data)
                localStorage.setItem("user", JSON.stringify(data))
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
