var http = require('http');
// import fetch from 'node-fetch';
//import {fetch} from 'node-fetch';
var fetch = require('node-fetch');
//import fetch from 'node-fetch';
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
module.exports = {
    index:function(req,res){
        limit=12;
        //console.log(req);
        q="&q=excited";
        if (req.query.limits) {
            limit=req.query.limits;
        }
        if (req.query.q) {
            q="&q="+req.query.q;
        }
      fetch("https://tenor.googleapis.com/v2/search?"+q+"&key=AIzaSyDPCSLZ80p7Zj1JuRI8fCCJuY8ybpHnqHc&client_key=AIzaSyDPCSLZ80p7Zj1JuRI8fCCJuY8ybpHnqHc&limit="+limit)
      .then(res => res.json())
      .then(json => {
        res.status(200).json(json);
  });
      },
      SearchForGifImages:function(req,res){
        limit=12;
        //console.log(req);
        q="&q=excited";
        if (req.query.limits) {
            limit=req.query.limits;
        }
        if (req.query.q) {
            q="&q="+req.query.q;
        }
      fetch("https://tenor.googleapis.com/v2/search?"+q+"&key=AIzaSyDPCSLZ80p7Zj1JuRI8fCCJuY8ybpHnqHc&client_key=AIzaSyDPCSLZ80p7Zj1JuRI8fCCJuY8ybpHnqHc&limit="+limit)
      .then(res => res.json())
      .then(json => {
        res.status(200).json(json);
  });
      },
}