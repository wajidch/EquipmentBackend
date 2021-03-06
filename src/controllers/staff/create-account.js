'use strict';

const randomString = require("randomstring");
const responses = require('../../utilities/responses');
const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");

const emailUtils = require('../../utilities/emails').employeeAddedEmail;
const hashPasswordUtility = require('../../utilities/password').hashPassword;
const model = require('../../models');
const Op = model.Sequelize.Op;
const staffModel = 'staff';




/**
 * Post new Equipment
 * @param req is containing payload sent from user
 * @param callback will return response to handler
 */
module.exports = (req, callback) => {

  

model[staffModel].count({
    where:{
        email:req.email,
        deleted:0
    }
}).then(count =>{

    if(count>0){
        return callback(null, responses.dataResponse(statusCodes.METHOD_FAILURE, responseMsg.ALREADY_EXISTS));

    }
    else{

    model[staffModel].create(req).then(created => {
              
        return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.ADDITION_SUCCESSFULL, created));


    }).catch(err => {
        return callback(err)
    });
}

})


     
}