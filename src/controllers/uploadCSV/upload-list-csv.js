'use strict';

const randomString = require("randomstring");
const responses = require('../../utilities/responses');
const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");

const emailUtils = require('../../utilities/emails').employeeAddedEmail;
const hashPasswordUtility = require('../../utilities/password').hashPassword;
const model = require('../../models');
const Op = model.Sequelize.Op;
const equipmentsModel = 'equipments';

const fs = require('fs'); 
const csv = require('csv-parser');


/**
 * Post new Equipment
 * @param req is containing payload sent from user
 * @param callback will return response to handler
 */
module.exports = (req, callback) => {

    let reqArray=[]
  let inputFilePath=`C:/xampp/htdocs/upload/${req.fileName}`
    fs.createReadStream(inputFilePath)
    .pipe(csv())
    .on('data', function(data){
        try {
            //perform the operation
            console.log(data);
            let dateobj={
                model:data.model,
                serialNo:data.serialNo,
                leaseStatus:data.leaseStatus,
                equipmentType:data.equipmentType,
                leasePeriod:data.leasePeriod,
                brand:data.brand,
                insuranceHistory:data.insuranceHistory,
                lifespan:data.lifespan,
                equipmentName:data.equipmentName,
                device1:data.device1
            }
           reqArray.push(dateobj);
        }
        catch(err) {
            //error handler
        }
    })
    .on('end',function(){
        //some final operation

        model[equipmentsModel].bulkCreate(reqArray).then(created => {
              
            return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.ADDITION_SUCCESSFULL, created));
    
    
        }).catch(err => {
            return callback(err)
        });

    });  
   



          

     
}