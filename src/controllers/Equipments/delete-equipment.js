'use strict';

const randomString = require("randomstring");
const responses = require('../../utilities/responses');
const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");

const emailUtils = require('../../utilities/emails').employeeAddedEmail;
const hashPasswordUtility = require('../../utilities/password').hashPassword;
const model = require('../../models');
const Op = model.Sequelize.Op;
const equipmentModel = 'equipments';




/**
 * Update CV
 * @param req is containing payload sent from user
 * @param callback will return response to handler
 * Update cv
 */
module.exports = (req, callback) => {


             model[equipmentModel].update({deleted:1},{
                 where:{
                     id:req.equipment_id,
                     deleted:0
                 }
             }
             ).then(updated=>{

                return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.UPDATION_SUCCESSFULL));


             })


        
  
}