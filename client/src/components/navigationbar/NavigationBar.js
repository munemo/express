import React, { useContext, useState} from 'react'
import './NavigationBar.css'
import Logotype from '../../shared/images/logotype.svg'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../shared/global/provider/UserProvider'
import { Profile } from '../profile/Profile'
import RoutingPath from '../../routes/RoutingPath'

export const NavigationBar = (props) => {
    const history = useHistory();
    const {checkIfUserAuthenticated, authenticatedUser} = useContext(UserContext)


    const displayUserIfAuthenticated = () => {

        return (authenticatedUser)
            ? <div className="profile"> <Profile /> </div>
            : <span onClick={() => history.push(RoutingPath.signInView)} className="signIn">Sign in</span>
            
    }

    return (
        <div className="navigationBarWrapper">
            <img onClick={() => history.push(RoutingPath.homeView)}
                className="logotype"
                src={Logotype}
                alt="Error..." />
            {displayUserIfAuthenticated()}
        </div>
    )
}