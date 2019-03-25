//since I have a seperate page for my routes we need express and express Router,hence I will import them
var express = require('express')

//then the express router
let router = express.Router();

//the database configuration 
var express = require('../../config/db');

//jwt for authentication 
const verifyUser = require('../../config/auth')

//import controllers for authentication
var  registerController = require('../../controllers/registerController')
var  loginController = require('../../controllers/loginController')

//import controllers for contestable year
var yearController = require('../../controllers/yearController');
var voteController = require('../../controllers/voteController');
var partyController = require('../../controllers/partyController');
var officeController = require('../../controllers/officeController');
var contestantController = require('../../controllers/contestantController');
var certifiedPartyController = require('../../controllers/certifiedPartyController');


//accepts routes, and returns the appropriate controller
router.post('/api/register', registerController.register_user);
router.post('/api/login', loginController.login_user);

router.post('/api/year',verifyUser.checkToken, yearController.create_year);
router.post('/api/vote', verifyUser.checkToken, voteController.create_vote);
router.post('/api/party', verifyUser.checkToken, partyController.create_party);
router.post('/api/office', verifyUser.checkToken, officeController.create_office);
router.post('/api/contestant', verifyUser.checkToken, contestantController.create_contestant);
router.post('/api/certified_party',verifyUser.checkToken, certifiedPartyController.create_certifiedParty);



//then we will now export this routes to the index file
module.exports = router;