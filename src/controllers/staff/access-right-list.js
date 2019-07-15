'use strict';

const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const responses = require('../../utilities/responses');
const model = require('../../models');
const Op = model.Sequelize.Op;

const staffModel = 'staff';

const moment=require('moment');

module.exports = (req, callback) => {
    
    model[staffModel].findOne({

        where: {
             deleted: 0,
             id:req.id
        },

        order: [ [ 'id', 'DESC' ]]


    }).then(stafflist => {
        return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.FETCH_SUCCESSFULL, stafflist));


    })
}