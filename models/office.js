//to create a schema, I need to requre mongoose
var  mongoose = require('mongoose');
let schema = mongoose.Schema;

let office_schema = new schema({ 
    
    id: String,
    office_name: String,
    office_description: String,
    organization:String,
    created_at: {
        type: Date,
        default: Date.now
    }

});

//now we create the model using the above schema
var offices = mongoose.model("offices", office_schema);
//export the model so that it can be used else where
module.exports = offices;