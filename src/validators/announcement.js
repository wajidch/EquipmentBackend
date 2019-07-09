'use strict';

const Joi = require('joi');

const postAnnouncement = Joi.object({


    subject: Joi.string().optional(),
    message: Joi.string().optional(),
     date: Joi.date().optional(),
   

});


module.exports = {
    postAnnouncement,
 
};