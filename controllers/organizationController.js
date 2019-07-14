var Organization = require('../models/organization');

//receives the form of created organization
exports.create_organization =  function(req, res, error){

    Organization.findOneAndDelete({id : req.body.id}, function(err, res){
        if(err){ 
            console.log(err)
        }else{
            console.log(res)
        }  
    })
  
    var new_organization = new Organization({
       
        id:req.body.id,
        organization_name : req.body.organization_name,
        organization_code : req.body.organization_code,
        current_election_year : req.body.current_election_year,
        election_start : req.body.election_start,

    })

    new_organization.save(function(error){
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
                message: "Organization successfully created"
            })
        }

    })




}