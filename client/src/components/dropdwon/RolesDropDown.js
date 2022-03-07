import {React, useState }from 'react'
import "./DropDown.css"

export const RolesDropDown = ({selectedRole, setSelectedRole, roles}) => {
    const [isActive, setIsActive] = useState(false);
    
  return (
    <div className="dropdown">
    <div className="dropdown-btn" onClick={(e) => 
        setIsActive(!isActive)}>
        {selectedRole}
        <span className="fas fa-caret-down"></span>
        </div>
        {isActive && (
        <div className="dropdown-content">
            {roles.map(option => (
                        <div key={option} className="dropdown-item" onClick={(e) => {
                            setSelectedRole(option)
                            setIsActive(false)
                        }  
                        }>
                {option}</div>
            ))}
      </div>)}
    
     </div>
  )}
