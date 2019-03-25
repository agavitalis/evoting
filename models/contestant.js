var mongoose = require('mongoose');
let schema = mongoose.Schema;

let contestant_schema = new schema({

    user_id: String,
    party_id: String,
    
    office_id:String,
    year_id:String,

    created_at: {
        type: Date,
        default: Date.now
    },


})


//now we create the model using the above schema
var contestants = mongoose.model("contestants", contestant_schema);
//export the model so that it can be used else where
module.exports = contestants;