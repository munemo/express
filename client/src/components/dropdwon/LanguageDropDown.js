import {React, useState }from 'react'
import "./DropDown.css"

export const LanguageDropDown = ({selectedLanguage, setSelectedLanguage, languages}) => {
    const [isActive, setIsActive] = useState(false);
    
  return (
    <div className="dropdown">
    <div className="dropdown-btn" onClick={(e) => 
        setIsActive(!isActive)}>
        {selectedLanguage}
        <span className="fas fa-caret-down"></span>
        </div>
        {isActive && (
        <div className="dropdown-content">
            {languages.map(option => (
                        <div key={option} className="dropdown-item" onClick={(e) => {
                            setSelectedLanguage(option)
                            setIsActive(false)
                        }  
                        }>
                {option}</div>
            ))}
      </div>)}
    
     </div>
  )}
