'use strict';

const statusCodes = require('http-status-codes');
const plugins = require('../../constants/routes-config');
const responses = require('../utilities/responses');
const config = require('../../configs/config');

const validator = require('../validators/staff');
const login = require('../controllers/staff/login');
const announcement = require('../controllers/announcements/post-announcements');
const staffList = require('../controllers/staff/list');
const createnewaccount= require('../controllers/staff/create-account')
const mostviewCV=require('../controllers/staff/most-view-cv');
const updateProfile=require('../controllers/staff/update-profile');



const Joi = require('joi');
module.exports = [

    // Users login
    {
        method: 'POST',
        path: config.apiPrefix + '/staff/login',
        config: {
            description: 'Login for User',
            notes: 'Login for user using email and password.',
            tags: ['api', 'Staff'],
            auth: false,
            handler: (request, reply) => {
                login(request.payload, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                payload: validator.userLogin,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },
   
    {
        method: 'PUT',
        path: config.apiPrefix + '/staff/updateProfile',
        config: {
            description: 'updateProfile',
            notes: 'updateProfile.',
            tags: ['api', 'Staff'],
            auth: false,
            handler: (request, reply) => {
                updateProfile(request.payload, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                payload: validator.updateProfile,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },

   
    {
        method: 'GET',
        path: config.apiPrefix + '/staff/stafflist',
        config: {
            description: 'staff list',
            notes: 'staff list.',
            tags: ['api', 'Staff'],
            auth: false,
    
            handler: (request, reply) => {
                staffList(request.query, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            // validate: {
            //     query: validator.status,
            //     failAction: (request, reply, source, err) => {
            //         reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
            //     }
            // },
            plugins: plugins.swaggerPlugin
        }
    },
   
   
    {
        method: 'POST',
        path: config.apiPrefix + '/staff/createnewaccount',
        config: {
            description: 'Admin can create new account',
            notes: 'Admin can create new account.',
            tags: ['api', 'Staff'],
            auth: false,
            handler: (request, reply) => {
                createnewaccount(request.payload, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                payload: validator.createStaffAccount,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },
  
];
