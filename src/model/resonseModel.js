exports.generalResponse = (statuscode, msg, obj) =>{
    let responseModel = {'status':0}

    responseModel.status = statuscode;

    if(msg){
        responseModel['message'] = msg;
    }

    if(obj){
        responseModel = {...responseModel, ...obj}
    }

    return responseModel
}