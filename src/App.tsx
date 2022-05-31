import { FC, useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import { IUser } from "./Interfaces/index"


const App: FC = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const testUser: IUser = { username: "GreekaRicaN", password: "123", profileImg: "something.png", email: "dagreekarican@aim.com" }

  useEffect(() => {
    setUser(testUser)
  }, [])

  return (
    <div className="flex flex-col h-screen pt-3">
      <Navbar user={user} />
      <hr className="border-1 border-black" />
    </div>
  )
}

export default App
