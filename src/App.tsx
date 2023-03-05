import { useEffect, useState } from "react"
import Homepage from "./components/Homepage"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Register from "./components/Register"
import RecipeProfile from "./components/RecipeProfile"
import { IUser } from "./Interfaces/index"
import { Routes, Route } from "react-router-dom"

const App = () => {
    const [user, setUser] = useState<IUser | null>(null)

    useEffect(() => {
        const savedUser = localStorage.getItem("user")
        if (savedUser) {
            setUser(JSON.parse(savedUser))
        }
    }, [])

    console.log(user);

    return (
        <main className="flex flex-col h-screen pt-3 bg-slate-600">
            <Navbar user={user} setUser={setUser} />
            {/* <hr className="border-1 border-black" /> */}
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/register" element={<Register setUser={setUser} />} />
                <Route path="/recipes/:id" element={<RecipeProfile />} />
            </Routes>
        </main>
    )
}

export default App
