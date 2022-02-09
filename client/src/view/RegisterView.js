import MentifyService from '../shared/api/service/MentifyService'
import { useState } from 'react'

export const RegisterView = () => {

    const [userRegistration, setUserRegistration] = useState({first_name:"",last_name:"",telephone:"", language:"", preference:"",about:"", email:"", user_type:"" })
   
   
    const registerUser = async () => {
        try{
            const {data} = await  MentifyService.registerUser(userRegistration)
            setUserRegistration(data)
             
             console.log(data)
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
              
              <label>First Name</label>
                  <input type="text" onChange={(e) => setUserRegistration({...userRegistration ,first_name: e.target.value})}/>
                  <label>Last Name</label>
                  <input type="text"  onChange={(e) => setUserRegistration({...userRegistration ,last_name: e.target.value})}/>
                  <label>Telephone</label>
                  <input type="text"  onChange={(e) =>setUserRegistration({...userRegistration ,telephone: e.target.value})}/>
                  <label>Language</label>
                  <input type="text"  onChange={(e) => setUserRegistration({...userRegistration ,language: e.target.value})}/>
                  <label>Preference</label>
                  <input type="text"  onChange={(e) => setUserRegistration({...userRegistration ,preference: e.target.value})}/>
                  <label>About</label>
                  <input type="text"  onChange={(e) =>setUserRegistration({...userRegistration ,about: e.target.value})}/>
                  <label>Email</label>
                  <input type="email"  onChange={(e) => setUserRegistration({...userRegistration ,email: e.target.value})}/>
                  <label>User</label>
                  <select name="user" id="user" value={userRegistration.user} onChange={(e) => setUserRegistration({...userRegistration ,user: e.target.value})}>
                  <option value="Select a User" selected>Select a User</option>
                  <option value="Mentor" >Mentor</option>
                  <option value="Intern" >Intern </option>
              
                  </select>
                 
                  <button  onClick={() => registerUser()}>Register</button>
                
              </div>
  


        </div>
    )
}