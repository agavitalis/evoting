var mongoose = require('mongoose');
let schema = mongoose.Schema;

let contestant_schema = new schema({
    id: String,
    user: String,
    party: String,
    
    office:String,
    year:String,

    created_at: {
        type: Date,
        default: Date.now
    },


})


//now we create the model using the above schema
var contestants = mongoose.model("contestants", contestant_schema);
//export the model so that it can be used else where
module.exports = contestants;