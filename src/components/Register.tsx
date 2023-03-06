import { useState, FormEvent, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Register = () => {
    const { user, setUser } = useContext(UserContext)
    const [registerField, setRegisterField] = useState({
        username: "",
        password: "",
        email: ""
    })

    const nav = useNavigate()

    const handleRegisterSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const res = await fetch(`http://localhost:8000/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: registerField.username,
                email: registerField.email,
                password: registerField.password
            })
        })
        const data = await res.json()
        if (data) {
            setUser(data)
            localStorage.setItem("user", JSON.stringify(data))
            nav("/")
        } else {
            console.log("Invalid fields")
        }
    }

    return (
        <form onSubmit={handleRegisterSubmit} className="flex items-center justify-center h-2/3 p-3">
            <div className="flex">
                <span className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Username..."
                        className="border-[1px] border-black rounded-tl-lg p-1"
                        onChange={(e) => setRegisterField({ ...registerField, username: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Email.."
                        className="border-[1px] border-black border-t-0 rounded-bl-lg p-1"
                        onChange={(e) => setRegisterField({ ...registerField, email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Password..."
                        className="border-[1px] border-black border-t-0 rounded-bl-lg p-1"
                        onChange={(e) => setRegisterField({ ...registerField, password: e.target.value })}
                    />
                </span>
                <button type="submit" className="border-[1px] border-black border-l-0 rounded-r-lg bg-slate-400 p-2">
                    Login
                </button>
            </div>
        </form>
    )
}

export default Register
