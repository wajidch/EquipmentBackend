'use strict';

const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const responses = require('../../utilities/responses');
const model = require('../../models');
const Op = model.Sequelize.Op;

const equipmentModel = 'equipments';

const moment=require('moment');

module.exports = (req, callback) => {
    
    model[equipmentModel].findAll({

        where: {
             deleted: 0,
            
        },

        order: [ [ 'id', 'DESC' ]]


    }).then(announcementList => {
        return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.FETCH_SUCCESSFULL, announcementList));


    })
}