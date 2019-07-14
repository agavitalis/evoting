var mongoose = require('mongoose');
let schema = mongoose.Schema;

let vote_schema = new schema({

    id: Number,
    user_id: String,
    contestant_id: String,
    party_id: String,
    
    office_id:String,
    year_id:String,
    organization_code: String,

    created_at: {
        type: Date,
        default: Date.now
    },


})




//now we create the model using the above schema
var votes = mongoose.model("votes", vote_schema);
//export the model so that it can be used else where
module.exports = votes;