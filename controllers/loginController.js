var User = require('../models/user');
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//login a new user
exports.login_user = function (req, res, error) {

   User.findOne({ email: req.body.email, password: req.body.password })
      .exec()
      .then(function (user) {

         //set the session variable
         req.session.email = req.body.email;

         const JWTToken = jwt.sign({
            email: user.email,
            _id: user._id
         },
            'secret',
            {
               expiresIn: '2h'
         });

        res.render('dashboard/dashboard', {token: JWTToken,user:req.session.email});
        

      })
      .catch(error => {
         res.status(500).json({
            error: error
         });
      });;


}

