var Contestant = require('../models/contestant');

//receives the form of created contestants
exports.create_contestant =  function(req, res, error){
  
    var new_contestant = new Contestant({
       
        user_id : req.body.user_id,
        party_id : req.body.party_id,
        office_id : req.body.office_id,
        year_id : req.body.year_id,
        created_at : req.body.created_at,

    })

    new_contestant.save(function(error){
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
                message: "Contestant was successfully created",
            })
        }

    })

}