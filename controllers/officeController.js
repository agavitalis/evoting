var Office = require('../models/office');

//receives the form of created offices
exports.create_office =  function(req, res, error){
  
    var new_office = new Office({
       
        office_name : req.body.office_name,
        office_description : req.body.office_description,
        office_image : req.body.office_image,
        created_at : req.body.created_at,

    })

    new_office.save(function(error){
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
                message: "Office successfully created",
            })
        }

    })




}