const express = require("express");
const app = express();
const bodyParser=require("body-parser");
const config=require("./config");
const cors=require("cors");

//middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

app.post("/mail/create",(req, res)=>{
    var mailgun = require('mailgun-js')({apiKey: config.api_key, domain: config.domain});
     
    var data = {
      from: config.from,
      to: req.body.recipient,
      subject: req.body.subject,
      text: req.body.message
    };
     
    mailgun.messages().send(data, function (error, body) {
      if(error){
        return res.status(400).send(error);  
      }
      return res.status(200).send(body);
    });

})

app.listen(8000,()=>console.log("APP IS working"));
