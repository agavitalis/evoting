var Year = require('../models/year');
const jwt = require('jsonwebtoken');

//receives the form of created contestable years
exports.create_year =  function(req, res, error){

    //grab the useremail from JWT
    var decoded = jwt.verify( req.token, 'secret');
    var new_year = new Year({
       
        year_name : req.body.year_name,
        is_current : req.body.is_current,
        created_at : req.body.created_at,

    })

    new_year.save(function(error){
        if (error) {
            res.send({
                status: 401,
                success: false,
                message: error

            })
        } else {
            res.send({
                status: 200,
                success: true,
                message: decoded.email,
            })
        }

    })

}