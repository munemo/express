import React, { useState, useEffect} from 'react'
import MentifyService from '../shared/api/service/MentifyService'
//import { UserContext } from '../shared/global/provider/UserProvider'
//import { useHistory } from 'react-router-dom'

/**if (response) {
                    return <div>
                       
                       {response.map(user =>{
                           return(<div key={user.id}>
                               
                                <h3>Email: {user.email} </h3>
                      
                                
                               </div >) })} 
                    </div>
                } */ 

export const SignInView = () => {
  //  const history = useHistory()
    const [userLogin, setLogin] = useState({email:" ",password:"" })
    const [loginStatus, setLoginStatus] = useState("")

    const login = async () => {
        try{
            const response = await  MentifyService.loginUser(userLogin)
            if(response.data.message){
                setLoginStatus(response.data.message)
            }else{
                setLoginStatus(response.data[0].email)
            }
        }
        catch(error){
        console.log('error!!!',error)
    }
    }

     useEffect(() => {
                async function fetchData() {
                const response =  await MentifyService.userSession(loginStatus)
                if (response.data.loggedIn == true){
                    setLoginStatus(response.data.user[0].email) 
                    console.log(response.data.user[0].email)  
                }                     
              }
              fetchData();
    }, [])
    



    return (
        <div>
            <span> Username: </span> <input onChange={(e) => setLogin({...userLogin ,email: e.target.value})} /> <br />
            <span> Password: </span> <input onChange={(e) => setLogin({...userLogin ,password: e.target.value})} /> <br />
            <button onClick={() => login()}>Login</button>
            <h1>{loginStatus}</h1>
        </div>
    )
}