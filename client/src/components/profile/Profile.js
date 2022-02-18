import React, { useContext } from 'react'
import { UserContext } from '../../shared/global/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import './Profile.css'
import RoutingPath from '../../routes/RoutingPath'
//import { parse } from 'dotenv'

export const Profile = () => {
    const history = useHistory()
    const {checkIfUserAuthenticated,authenticatedUser,setAuthenticatedUser} = useContext(UserContext)

      /*
      const displayUserIfNotAuthenticated = () => {
        setAuthenticated(false)
        console.log(' status in displayUserIfNotAuthenticated method:',authenticatedUser)

       return (authenticatedUser)
            ? <div className="profile"> <Profile /> </div>
            : <span onClick={() => history.push(RoutingPath.signInView)} className="signIn">Sign in</span>
     */
    
    const logout = () => {
       console.log(' To be removed',localStorage.getItem("user"))   
    }

    return (
        <div className="profileWrapper">
            <img className="profileImg" src={"https://www.thispersondoesnotexist.com/image"} alt="" />
            <span className="displayedUsername">{localStorage.getItem("user")}</span>
            <div className="profileDropdown">
                <a onClick={() => history.push(RoutingPath.settingsView)}>Settings</a>
                <a onClick={() => history.push(RoutingPath.profileView)}>Profile</a>
                <hr />
                <a onClick= {() => history.push(RoutingPath.signInView)}>Logout</a>
                {logout()}
            
            </div>
        </div>
    )
}