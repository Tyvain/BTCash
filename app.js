const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const config=require("./config");
const app = express();

app.use(express.static('.'));
app.use(express.static(path.join(__dirname, "client")));

//middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// --
// Set express configs
process.env.PORT = process.env.PORT || 3000;
app.set('port', process.env.PORT);

app.post("/mail/create",(req, res)=>{
    var mailgun = require('mailgun-js')({apiKey: config.api_key, domain: config.domain});
     
    var data = {
      from: req.body.recipient,
      to: req.body.recipient,
      subject: req.body.subject,
      text: req.body.message
    };
     
    mailgun.messages().send(data, function (error, body) {
      if(error){
        return res.status(400).send({message: 'Sandbox subdomains are for test purposes only. Please add your own domain or add the address to authorized recipients in domain settings'});  
      }
      return res.status(200).send(body);
    });

})


// Start server
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
