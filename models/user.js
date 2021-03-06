//to create a schema, I need to requre mongoose
var  mongoose = require('mongoose');
let schema = mongoose.Schema;

let user_schema = new schema({

    id: String,
    first_name: String,
    last_name: String,
    date_of_birth:{
        type:Date,
        default: null
    },
    lga:String,
    state:String,

    phone: String,
    email: String,
    password: String,


    updated_at: {
        type: Date,
        default: Date.now
    },

    role: {
        type: String,
        default: "voter"
    },


});

//now we create the model using the above schema
var users = mongoose.model("users", user_schema);
//export the model so that it can be used else where
module.exports = users;