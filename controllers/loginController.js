var User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//login a new user
exports.login_user =  function(req, res, error){

    User.findOne({email: req.body.email})
   .exec()
   .then(function(user) {
      bcrypt.compare(req.body.password, user.password, function(err, result){
         if(err) {
            return res.status(401).json({
               failed: 'Unauthorized Access'
            });
         }
         if(result) {
            const JWTToken = jwt.sign({
               email: user.email,
               _id: user._id
            },
            'secret',
               {
                  expiresIn: '2h'
               });
            return res.status(200).json({
               success: 'Welcome to eVoting',
               token: JWTToken
            });
         }
         return res.status(401).json({
            failed: 'Unauthorized Access'
         });
      });
   })
   .catch(error => {
      res.status(500).json({
         error: error
      });
   });;


}

