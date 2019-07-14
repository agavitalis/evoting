var User = require('../models/user');

//here I receive the form to be submitted by the user
exports.register_user = function(req, res, error){

   User.findOneAndDelete({id : req.body.id}, function(err, res){
      if(err){ 
          console.log(err)
      }else{
          console.log(res)
      }  
   })

   
   let new_user = new User({

      id:req.body.id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      date_of_birth: req.body.date_of_birth,

      phone: req.body.phone,
      email: req.body.email,

      state: req.body.state,
      lga: req.body.lga,

      password: req.body.password,
      role: req.body.role,

   })



   new_user.save().then(function(result) {
         console.log(result);
         res.status(200).json({
            success:true,
            message: 'User has been created'
         });
   }).catch(error => {
      res.status(500).json({
         error: err
      });
   });
        
    
}