'use strict';

const statusCodes = require('http-status-codes');
const plugins = require('../../constants/routes-config');
const responses = require('../utilities/responses');
const config = require('../../configs/config');

const validator = require('../validators/staff');
const login = require('../controllers/staff/login');
const announcement = require('../controllers/announcements/post-announcements');
const cvList = require('../controllers/staff/list');
const mostviewCV=require('../controllers/staff/most-view-cv');
const updateProfile=require('../controllers/staff/update-profile');


const Joi = require('joi');
module.exports = [

    // Users login
    {
        method: 'POST',
        path: config.apiPrefix + '/User/login',
        config: {
            description: 'Login for User',
            notes: 'Login for user using email and password.',
            tags: ['api', 'User'],
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
        path: config.apiPrefix + '/User/updateProfile',
        config: {
            description: 'updateProfile',
            notes: 'updateProfile.',
            tags: ['api', 'User'],
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

   
    
   
   
    //  Product list API
  
];
