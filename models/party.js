//to create a schema, I need to requre mongoose
var  mongoose = require('mongoose');
let schema = mongoose.Schema;

let party_schema = new schema({

    id: String,
    party_name: String,
    party_logo: String,

    party_slogan:String,
    party_vision:String,

    party_mission: String,
    certified: String,
    updated_at: {
        type: Date,
        default: Date.now
    }

});

//now we create the model using the above schema
var parties = mongoose.model("parties", party_schema);
//export the model so that it can be used else where
module.exports = parties;


