import React, { useContext } from 'react'
import { UserContext } from '../../shared/global/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import MentifyService from '../../shared/api/service/MentifyService'
import './Profile.css'
import RoutingPath from '../../routes/RoutingPath'

export const Profile = () => {
    const history = useHistory()
    const {checkIfUserAuthenticated,authenticatedUser,setAuthenticatedUser} = useContext(UserContext)

    const logout = async() => {

      const response = await MentifyService.logoutUser()
      console.log(response)
     // history.push(RoutingPath.signInView)

        }

    return (
        <div className="profileWrapper">
            <img className="profileImg" src={"https://www.thispersondoesnotexist.com/image"} alt="" />
            <span className="displayedUsername">{localStorage.getItem("user")}</span>
            <div className="profileDropdown">
                <a onClick={() => history.push(RoutingPath.settingsView)}>Settings</a>
                <a onClick={() => history.push(RoutingPath.profileView)}>Profile</a>
                <hr />
                <a onClick= {() => logout()}>Logout</a>
            
            </div>
        </div>
    )
}