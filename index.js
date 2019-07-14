// Notice, For simplicity, I will not use ES15
// firstly I required express
var express = require('express')

//I require our middleware for forms
var body_parser = require('body-parser')

//I require morgan for cross origin resource
var cors = require('cors');

//we need to know our clients, then we require morgan
var morgan = require('morgan')

//require those routes which I created seperately
var routes = require( './routes/api/api.js');


 
//lets use the files we have required, we use express first, since it is our server
const app = express();
//setup the views
app.set('view engine', 'ejs');
app.use(morgan('combined'));
app.use(body_parser.urlencoded({extended:false}))
app.use(body_parser.json());
app.use(cors({credentials:true,origin:'http://localhost:5000/api/'}));

//server static files
app.use(express.static('public'))

//I captured the landing route here
app.get('/', function(req, res, next){
    res.render('index');
});

//tI used the other routes here
app.use(routes);


//Now tisten to this port 
if (app.listen(process.env.PORT || 5000)) {
    console.log("Node is listening to port 5000");
}
else{
    console.log("Database connection error");
}