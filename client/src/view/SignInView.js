import { UserContext } from '../shared/global/provider/UserProvider'
import React, {useContext} from 'react'
import './siginIn/SignInView.css'

export const SignInView = () => {

    const {userLogin, setLogin, login} = useContext(UserContext)


     return (
        <div className="grid-container">
            <div className="form-container">
            <h1>Login</h1>
                <span> Username </span> <input type="text" onChange={(e) =>setLogin({...userLogin ,email: e.target.value})}/> <br />
                <span> Password</span> <input type="text"  onChange={(e) =>setLogin({...userLogin ,password: e.target.value})} /> <br />
                 <button onClick={login}>Login</button>   
            </div>
                    
        </div>
    )
}