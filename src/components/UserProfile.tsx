import { useContext } from "react"
import { UserContext } from "../App"

const UserProfile = () => {
    const { user } = useContext(UserContext)

    return (
        <div>
            UserProfile
        </div>
    )
}

export default UserProfile
