import React, { useContext } from 'react'
import { UserContext } from '../../shared/global/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import './Profile.css'
import RoutingPath from '../../routes/RoutingPath'

export const Profile = () => {
    const history = useHistory()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const logout = () => {
        localStorage.removeItem('username')
        setAuthenticatedUser(false)
        history.push(RoutingPath.homeView)
    }

    return (
        <div className="profileWrapper">
            <img className="profileImg" src={"https://www.thispersondoesnotexist.com/image"} alt="" />
            <span className="displayedUsername">{authenticatedUser}</span>
            <div className="profileDropdown">
                <a onClick={() => history.push(RoutingPath.settingsView)}>Settings</a>
                <a onClick={() => history.push(RoutingPath.profileView)}>Profile</a>
                <hr />
                <a onClick={() => logout()}>Logout</a>
            </div>
        </div>
    )
}