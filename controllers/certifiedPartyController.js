var certifiedParty = require('../models/certifiedParty');

//receives the form of created certifiedParties
exports.create_certifiedParty =  function(req, res, error){
  
    var new_certifiedParty = new certifiedParty({
       
        party_id : req.body.party_id,
        office_id : req.body.office_id,
        year_id : req.body.year_id,
        created_at : req.body.created_at,

    })

    new_certifiedParty.save(function(error){
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
                message: "This party has been successfully certified",
            })
        }

    })

}