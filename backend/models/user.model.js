module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define("user", {
    
    email: {
    
    type: Sequelize.STRING
    
    },
    
  
    password: {
    
            type: Sequelize.STRING
            
            },
     
    language: {
    
        type: Sequelize.STRING
        
        },
         
    speciality: {
    
        type: Sequelize.STRING
        
        },
    role: {
    
            type: Sequelize.STRING
            
        },
    about: {
    
            type: Sequelize.STRING
            
        },

    active: {
    
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
    published: {
    
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
    
    });
    
    
    
    return User;
    
    };