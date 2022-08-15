const {downloadFile, getFileId} = require('../googleDrive/download');
const {getUserId} = require('../firebase/auth')
const fs = require('fs')
const {generalResponse} = require('../model/resonseModel')

exports.checkFileExist = (req, res, next) =>{
    const requestBody = req.body;
    const userId = requestBody.userId;
    const fileName = requestBody.fileName;

    getUserId(userId)
    .then(userExist =>{
        if(userExist){
            getFileId(fileName)
            .then(response =>{
                res.send(generalResponse(0,'exist', {id: response}))
            })
            .catch(err =>{
                res.send(generalResponse(500,err))
            })
        }
        else{
            res.send(generalResponse(401,'unauthorized'))
        }
    })

}


exports.downloadFileFronDriveController = (req, res, next) =>{
    const requestBody = req.body;
    const userId = requestBody.userId;
    const fileId = requestBody.fileId;

    console.log(":downloadFileFronDriveControllerdownloadFileFronDriveController "+fileId)
    getUserId(userId)
    .then(userExist =>{
        if(userExist){
            console.log("userExist: ")
            downloadFile(fileId)
            .then(driveResponse =>{
                driveResponse
                .pipe(res);
            })
            .catch(err =>{
                res.send(generalResponse(500,err))
            })
        }
        else{
            res.send(generalResponse(401,'unauthorized'))
        }
    })






}