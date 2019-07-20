var Year = require('../models/year');
var Organization = require('../models/organization');
var Office = require('../models/office');
var Contestants = require('../models/contestant');
var Party = require('../models/party');
var Vote = require('../models/vote');


//receives the request related to dashboard
exports.organization = function (req, res, error) {

   if (req.method == "GET") {

      Year.find({}, function (err, years) {
         res.render('dashboard/organization', { user: req.session.email, years });
      });

   } else if (req.method == "POST") {
      Office.aggregate([
         {
            $lookup:
            {
               from: Organization.collection.name,
               localField: "organization",
               foreignField: "id",
               as: "organization",
            }
         }
      ]).exec()
         .then(function (offices) {
            selected_offices = []
            selected_organization = ""
            offices.forEach(office => {
               office.organization.forEach(organization => {
                  if (organization.organization_code == req.body.org_code) {
                     selected_offices.push(office)
                     selected_organization = organization.organization_name
                     organization_code = organization.organization_code
                  }
               });
            });
            res.render('dashboard/office', { user: req.session.email, selected_offices, selected_organization, organization_code });

         })
   }

}

exports.result = async function (req, res, error) {
   if (req.method == "GET") {
      res.send({
         message: "route is only for post"
      })
   }
   else if (req.method == "POST") {

      Contestants.aggregate([
         {
            $lookup:
            {
               from: Party.collection.name,
               localField: "party",
               foreignField: "id",
               as: "party",
            }
         }
      ]).exec().then(function (contestants) {

         const selected_contestants = contestants.filter(contestant => contestant.office == req.body.office_id);
         //work on these selected contestants
         var resultn = []
         selected_contestants.forEach( (contestanttt) => {
            var contestant_object = {}
            Vote.find({contestant_id: contestanttt.id, office_id: req.body.office_id, organization_code : req.body.org_code  }).exec().then(function(count){
               
               contestanttt.party.forEach(party => {
                  contestant_object.party = party.party_name;
               });
               
               contestant_object.contestant = contestanttt.id;
               contestant_object.votes = count.length
               
               resultn.push(contestant_object)
            })
   
         })
           
         setTimeout(function(){ res.render("dashboard/result",{resultn})}, 5000);
         
      })
   }
}