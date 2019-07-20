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
var organizationController = require('../../controllers/organizationController');
var certifiedPartyController = require('../../controllers/certifiedPartyController');
var dashboardController = require('../../controllers/dashboardController');


//accepts routes, and returns the appropriate controller
router.post('/api/register', registerController.register_user);

router.route('/api/login')
  .get(function (req, res) {
    res.render('login');
  })
  .post(loginController.login_user)

router.post('/api/year', yearController.create_year);
router.post('/api/vote',  voteController.create_vote);
router.post('/api/party', partyController.create_party);
router.post('/api/office', officeController.create_office);
router.post('/api/contestant', contestantController.create_contestant);
router.post('/api/organization', organizationController.create_organization);

//An authenticated route
router.post('/api/certified_party',verifyUser.checkToken, certifiedPartyController.create_certifiedParty);

//Dashboard routes
router.route('/dashboard')
    .get(function (req, res) {
        res.render('dashboard/dashboard');
})

router.use('/organization',dashboardController.organization)
router.use('/result', dashboardController.result)

//then we will now export this routes to the index file
module.exports = router;