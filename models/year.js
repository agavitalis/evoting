//to create a schema, I need to requre mongoose
var  mongoose = require('mongoose');
let schema = mongoose.Schema;

let year_schema = new schema({

    year_name: String,
    
    is_current: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now
    }

});

//now we create the model using the above schema
var years = mongoose.model("years", year_schema);
//export the model so that it can be used else where
module.exports = years;