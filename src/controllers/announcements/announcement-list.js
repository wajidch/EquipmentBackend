'use strict';

const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const responses = require('../../utilities/responses');
const model = require('../../models');
const Op = model.Sequelize.Op;

const announcementModel = 'announcements';

const moment=require('moment');

module.exports = (req, callback) => {

    
    
    model[announcementModel].findAll({

        where: {
             deleted: 0,
             date:{
                 [Op.gte]:moment(new Date()).startOf('day').format(),
                 [Op.lte]:moment(new Date()).add(7,'days').endOf('day').format()
             }
        },

        order: [ [ 'id', 'DESC' ]]


    }).then(announcementList => {
        return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.FETCH_SUCCESSFULL, announcementList));


    })
}