var User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//here I receive the form to be submitted by the user
exports.register_user = function(req, res, error){

    bcrypt.hash(req.body.password, 10, function(err, hash){
        if(err) {
           return res.status(500).json({
              error: err
           });
        }else {

            let new_user = new User({

                first_name: req.body.first_name,
                last_name: req.body.last_name,
                date_of_birth: req.body.date_of_birth,

                phone: req.body.phone,
                email: req.body.email,

                state: req.body.state,
                lga: req.body.lga,

                password: hash,
                biography: req.body.biography,
                profile_picture: req.body.profile_picture,
                finger_print: req.body.finger_print,
                created_at: req.body.created_at,
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

    })
}