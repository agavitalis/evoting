var mongoose = require('mongoose');
let schema = mongoose.Schema;

let certifiedParty_schema = new schema({

    party_id: String,
    
    office_id:String,
    year_id:String,

    created_at: {
        type: Date,
        default: Date.now
    },


})


//now we create the model using the above schema
var certifiedParty = mongoose.model("certified_parties", certifiedParty_schema);
//export the model so that it can be used else where
module.exports = certifiedParty;