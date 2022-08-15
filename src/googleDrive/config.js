const { google } = require("googleapis");
const fs = require('fs');

const credentialFilename = __dirname+"/key.json";
console.log(credentialFilename)
const scopes = ["https://www.googleapis.com/auth/drive.readonly"];

const auth = new google.auth.GoogleAuth({keyFile: credentialFilename, scopes: scopes});
const drive = google.drive({ version: "v3", auth });


exports.auth = auth;
exports.drive = drive;