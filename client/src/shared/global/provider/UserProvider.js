import {createContext, useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import RoutingPath from '../../../routes/RoutingPath'

import MentifyService from '../../api/service/MentifyService'

export const UserContext = createContext({})
export const UserProvider = (props) => {
    const [authenticatedUser, setAuthenticatedUser] = useState(false)
    const [userLogin, setLogin] = useState({email:"",password:"" })

    function  login  (){
            const userLog = async () => {

            const response = await MentifyService.loginUser(userLogin)
            if(!response.data.auth){
                setAuthenticatedUser(false)
           }else{
               localStorage.setItem("token", response.data.token)
               localStorage.setItem("user", response.data.person[0].email)
              // console.log(localStorage.getItem('token'))
               setAuthenticatedUser(true)    
                         
           }}
        userLog()
    }

   /* function checkIfUserAuthenticated() {

        const userAuth = async () =>{

        const response =  await axios.get("http://localhost:4000/auth", {headers:{"x-access-token": localStorage.getItem("token")}})
        console.log(response)
    } 
        userAuth()
    }

    useEffect(() => {
       
      checkIfUserAuthenticated();
}, [authenticatedUser]) */
    
    const values= {authenticatedUser, setAuthenticatedUser,userLogin, setLogin, login}

    return (
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
        
    )
}