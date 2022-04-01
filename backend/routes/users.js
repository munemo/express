module.exports = app => {
    const users = require('../controllers/user.Controller');
    var router = require("express").Router();

    router.post("/", users.register);
    router.get("/:email", users.confirmation);
    router.post("/login", users.login);
    router.post("/logout", users.logout);
    router.post("/preferences/:email", users.preferences);
   
    

  
   
 
  
    // Retrieve all Tutorials
    //router.get("/", tutorials.findAll);
  
    // Retrieve all published Tutorials
    //router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    //router.get("/:id", tutorials.findOne);
  
    // Update a Tutorial with id
   // router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    //router.delete("/:id", tutorials.delete);
  
    // Create a new Tutorial
    //router.delete("/", tutorials.deleteAll);
  
    app.use('/users', router);
  };