'use strict';

const Joi = require('joi');

const postAnnouncement = Joi.object({


    subject: Joi.string().optional(),
    message: Joi.string().optional(),
     date: Joi.date().optional(),
   

});


const createStaffAccount={
    staff_id:Joi.number().integer().optional(),
    first_name:Joi.string().optional(),
    last_name:Joi.string().optional(),
    mobile_no:Joi.string().optional(),
    email:Joi.string().optional(),
    password:Joi.string().optional(),
    role:Joi.string().optional(),
    profile_picture:Joi.string().optional(),
    job_title:Joi.string().optional(),
    department:Joi.string().optional(),
  
}

const updateProfile={
    user_id:Joi.number().required(),
    first_name:Joi.string().optional(),
    email:Joi.string().optional(),

    password: Joi.string().empty('').optional(),
    mobile_no:Joi.string().empty('').optional(),
    profile_picture:Joi.string().empty('').optional(),
department:Joi.string().empty('').optional(),
staff_id:Joi.string().empty('').optional()
    
}

const changePassword={
    user_id:Joi.number().required(),
    password:Joi.string().required()

}


const userLogin = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),


})
const accessrightlist={
    id:Joi.number().required(),
}
const editaccessright={
    id:Joi.number().required(),
    staff_id:Joi.number().empty('').optional(),
    first_name:Joi.string().empty('').optional(),
    department:Joi.string().empty('').optional(),
    job_title:Joi.string().empty('').optional(),
    role:Joi.string().empty('').optional()

}
module.exports = {
    editaccessright,
    accessrightlist,
    postAnnouncement,
  updateProfile,
    userLogin,
    createStaffAccount,
    changePassword

};