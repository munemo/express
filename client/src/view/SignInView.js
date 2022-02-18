import { UserContext } from '../shared/global/provider/UserProvider'
import React, {useContext} from 'react'

export const SignInView = () => {

    const {userLogin, setLogin, login} = useContext(UserContext)


     return (
        <div>
            <span> Username: </span> <input type="text" onChange={(e) =>setLogin({...userLogin ,email: e.target.value})}/> <br />
            <span> Password: </span> <input onChange={(e) =>setLogin({...userLogin ,password: e.target.value})} /> <br />
            <button onClick={login}>Login</button>           
        </div>
    )
}