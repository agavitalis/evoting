var Party = require('../models/party');

//receives the form of created contestable years
exports.create_party = function (req, res, error) {

	Party.findOneAndDelete({id : req.body.id}, function(err, res){
        if(err){ 
            console.log(err)
        }else{
            console.log(res)
        }  
	})
	
	var new_party = new Party({

		id: req.body.id,
		party_name: req.body.party_name,
		party_logo: req.body.party_logo,
		party_slogan: req.body.party_slogan,
		party_vision: req.body.party_vision,
		party_mission: req.body.party_mission,

	})

	new_party.save(function (error) {
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
				message: "Party successfully created",
			})
		}

	})

}