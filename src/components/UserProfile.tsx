import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "../App"

const UserProfile = () => {
    const { username } = useParams()
    const { user } = useContext(UserContext)

    useEffect(() => {
        if (user && username === user.username) {
            console.log("you are in your own profile")
        } else {
            console.log(`This profile belongs to ${username}`)
        }
    }, [user])

    return (
        <div>
            UserProfile
        </div>
    )
}

export default UserProfile
