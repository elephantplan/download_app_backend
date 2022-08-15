
var admin = require("firebase-admin");

var serviceAccount = require("./key.json");

exports.initializeApp = () =>{
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}



