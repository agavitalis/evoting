var Contestant = require('../models/contestant');

//receives the form of created contestants
exports.create_contestant =  function(req, res, error){
  
    var new_contestant = new Contestant({
        id:req.body.user,
        user : req.body.user,
        party : req.body.party,
        office : req.body.office,
        year : req.body.year,
        
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