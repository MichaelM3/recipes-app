import { FC, useEffect, useState } from "react"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import { IUser } from "./Interfaces/index"
import { Routes, Route } from "react-router-dom"
import { users } from "./users"
  
const App: FC = () => {
  const [user, setUser] = useState<IUser | null>(null)

  // useEffect(() => {
  //   setUser(testUser)
  // }, [])

  console.log(user)

  return (
    <main className="flex flex-col h-screen pt-3">
      <Navbar user={user} />
      <hr className="border-1 border-black" />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="login" element={<Login setUser={setUser} />} />
      </Routes>
    </main>
  )
}

export default App
