var express = require('express');
var router = express.Router();

const psi = require('psi-v4');

function psiDefault(url, req, res, next){
     
// Get the PageSpeed Insights report
// psi(url).then(data => {
//   console.log(data.ruleGroups.SPEED.score);
//   console.log(data.pageStats);
// });
 
// Output a formatted report to the terminal
// psi.output(url).then(() => {
//   console.log('done');
// });
 
// Supply options to PSI and get back speed and usability scores
psi(url, {nokey: 'true', strategy: 'mobile'}).then(data =>data.data).then(function(data){res.json(data)
    }).catch(next)


}

/* GET users listing. */
router.all('/', function(req, res, next) {
    // console.log(req.body.url);
    // console.log(psiDefault(req.body.url));
  psiDefault(req.body.url, req, res, next);


});

module.exports = router;
