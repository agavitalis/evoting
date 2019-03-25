var mongoose = require('mongoose')

//lets conneect to our mongodb database for local
mongoose.connect('mongodb://localhost:27017/evoting-api',{ useNewUrlParser: true });

//before going live, uncomment this connection
// mongoose.connect('mongodb://vita:Chidiebere94@ds111963.mlab.com:11963/evoting-api', {
//     useNewUrlParser: true
// });

//lets check if the connection was not successful
mongoose.connection.on('error', console.error.bind(console, 'connection error'))

//if the connection was successful
mongoose.connection.once('open', function () {
    console.log('Database connection was successful')
})
