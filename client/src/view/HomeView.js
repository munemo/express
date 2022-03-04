import React, { useState } from 'react'
import MentifyService from '../shared/api/service/MentifyService'

export const HomeView = () => {
    const [data, setData] = useState()

    const getAllUsers = async () => {
        try{
            const {data} = await MentifyService.getAllUsers()
             setData(data)    
             console.log(data)  
            }
        catch(error){
        console.log('error!!!',error)
    }}

    const displayData = () => {
        if (data) {
            return <div>
               
               {data.map(user =>{
                   return(<div key={user.id}>
                       
                        <h3>Email: {user.email} </h3>
                        <h3>Password : {user.password}</h3>
                        <h3>Created: {user.created_at}</h3>
                        
                       </div >) })} 
            </div>
        }}

    return (
        <div>
            
            <h1>Welcome</h1>

            <h2>Mentify is a platform for connecting aspiring candidates with mentors that can help them find jobs/internships</h2>
            <p></p>
            <p></p>
            <br />
            <button onClick={() => getAllUsers()}>Get Users!</button>
            {displayData()}
        </div>
    )
}