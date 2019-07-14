var Vote = require('../models/vote');

//receives the form of created contestable years
exports.create_vote =  function(req, res, error){

    Vote.findOneAndDelete({id : req.body.id}, function(err, res){
        if(err){ 
            console.log(err)
        }else{
            console.log(res)
        }  
    })
  
    var new_vote = new Vote({
       
        id: req.body.id,
        user_id : req.body.user_id,
        party_id : req.body.party_id,
        contestant_id: req.body.contestant_id,

        office_id : req.body.office_id,
        year_id : req.body.year_id,
        organization_code: req.body.organization_code,
        created_at : req.body.created_at,

    })
    

    new_vote.save(function(error){
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
                message: "Vote Successfully Sync",
            })
        }

    })

}