import MentifyService from '../shared/api/service/MentifyService'
import { useState } from 'react'
import { RolesDropDown } from '../components/dropdwon/RolesDropDown'
import {LanguageDropDown} from '../components/dropdwon/LanguageDropDown'
import { SpecialityDropDown } from '../components/dropdwon/SpecialityDropDown'
import './register/RegisterView.css'

export const RegisterView = () => {

    const [selectedRole, setSelectedRole] = useState('')
    const [description, setDescription] = useState('')
    const [selectedLanguage, setSelectedLanguage] = useState('')
    const [selectedSpeciality, setSelectedSpeciality] = useState('')
    const [userRegistration, setUserRegistration] = useState({})

    const roles = ['Intern', 'Mentor']
    const speciality = ['IT', 'Engineering', 'Accounting', 'Business', 'Other']
    const languages = ['English', 'Swedish', 'French', 'Spanish', 'Mandarin', 'Farsi']
   
   
    const registerUser = async () => {
        try{
            const data = await  MentifyService.registerUser(userRegistration)
            setUserRegistration(data)
            
            console.log(userRegistration)
            console.log(selectedLanguage)
        

                    

        }
        catch(error){
        console.log('error!!!',error)

    }
    }
    return (
        <div className="grid-container">
            <div className="form-container">
                <h1>Register</h1>
                <p>Please register to create your account.</p>
                 <span>Email </span> <input type="text" onChange={(e) => setUserRegistration({...userRegistration ,email: e.target.value})}/> <br />
                 <span>Password </span> <input type="text"  onChange={(e) => setUserRegistration({...userRegistration ,password: e.target.value})}/> <br/>
                 <span>Select Role<RolesDropDown  selectedRole={selectedRole} setSelectedRole={setSelectedRole}  roles={roles} /></span>
                 <span>Select Language <LanguageDropDown  selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}  languages={languages}   /></span>
                 <span>Select Speciality <SpecialityDropDown  selectedSpeciality={selectedSpeciality}  setSelectedSpeciality={ setSelectedSpeciality}  speciality={speciality} /></span>
                 <span>About </span> <input type="text" onChange={(e) => setDescription({...userRegistration ,description: e.target.value})}/>
                <button  onClick={() => registerUser()}>Register</button>
              </div>
        </div>
    )}