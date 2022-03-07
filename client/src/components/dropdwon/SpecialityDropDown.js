import {React, useState }from 'react'
import "./DropDown.css"

export const SpecialityDropDown = ({selectedSpeciality, setSelectedSpeciality, speciality}) => {
    const [isActive, setIsActive] = useState(false);
    
  return (
    <div className="dropdown">
    <div className="dropdown-btn" onClick={(e) => 
        setIsActive(!isActive)}>
        {selectedSpeciality}
        <span className="fas fa-caret-down"></span>
        </div>
        {isActive && (
        <div className="dropdown-content">
            {speciality.map(option => (
                        <div key={option} className="dropdown-item" onClick={(e) => {
                            setSelectedSpeciality(option)
                            setIsActive(false)
                        }  
                        }>
                {option}</div>
            ))}
      </div>)}
    
     </div>
  )}
