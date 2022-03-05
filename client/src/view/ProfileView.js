import React, { useContext, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../shared/global/provider/UserProvider'
import MentifyService from '../shared/api/service/MentifyService'
 

export const ProfileView = () => {
    const {checkIfUserAuthenticated,authenticatedUser,setAuthenticatedUser} = useContext(UserContext)
    const [id, setID] = useState()

    const deleteUserById = async () => {
        
        const response = await axios.get(`http://localhost:4000/users/delete/${id}`,  { headers: {"x-access-token": localStorage.getItem("token")
    }})
    }

    return (
        <div>
            <h1>This is the ProfileView!</h1>
         
            <input type="text" onChange={(e) =>setID(e.target.value)}/>
            <button onClick={deleteUserById}>Delete</button>
        </div>
    )
}