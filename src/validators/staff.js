'use strict';

const Joi = require('joi');

const postAnnouncement = Joi.object({


    subject: Joi.string().optional(),
    message: Joi.string().optional(),
     date: Joi.date().optional(),
   

});

const updateProfile={
    user_id:Joi.number().required(),
    name: Joi.string().empty('').optional(),
    password: Joi.string().empty('').optional(),
    phone:Joi.string().empty('').optional(),
    profile_picture:Joi.string().empty('').optional()
    
}


const userLogin = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),


})

module.exports = {
    postAnnouncement,
  updateProfile,
    userLogin,
};