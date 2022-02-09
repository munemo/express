import MentifyService from '../shared/api/service/MentifyService'
import { useState } from 'react'

export const RegisterView = () => {

    /*<select name="user" id="user" value={userRegistration.user} onChange={(e) => setUserRegistration({...userRegistration ,user: e.target.value})}>
                  <option value="Select a User" selected>Select a User</option>
                  <option value="Mentor" >Mentor</option>
                  <option value="Intern" >Intern </option>
              
                  </select>*/

    const [userRegistration, setUserRegistration] = useState({email:" ",password:"" })
   
   
    const registerUser = async () => {
        try{
            const data = await  MentifyService.registerUser(userRegistration)
            setUserRegistration(data)
        }
        catch(error){
        console.log('error!!!',error)
    }
    }
    return (
        <div>
            <h1>Register</h1>
            <p>Please register to create your account!</p>

            <div>
              
                 <label>Email</label>
                  <input type="text" onChange={(e) => setUserRegistration({...userRegistration ,email: e.target.value})}/>
                  <label>Password</label>
                  <input type="text"  onChange={(e) => setUserRegistration({...userRegistration ,password: e.target.value})}/>
                 
                  
                 
                  <button  onClick={() => registerUser()}>Register</button>
                
              </div>
  


        </div>
    )
}