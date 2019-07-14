//to create a schema, I need to requre mongoose
var  mongoose = require('mongoose');
let schema = mongoose.Schema;

let organization_schema = new schema({

    id: Number,
    organization_name: String,
    organization_code: String,
    
    current_election_year: String,
    election_start: String,

    updated_at: {
        type: Date,
        default: Date.now
    }

});

//now we create the model using the above schema
var organizations = mongoose.model("organizations", organization_schema);
//export the model so that it can be used else where
module.exports = organizations;