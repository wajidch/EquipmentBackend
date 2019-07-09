'use strict';

const statusCodes = require('http-status-codes');
const plugins = require('../../constants/routes-config');
const responses = require('../utilities/responses');
const config = require('../../configs/config');

const validator = require('../validators/announcement');
const announcement = require('../controllers/announcements/post-announcements');
const announcementList= require('../controllers/announcements/announcement-list');


module.exports = [
    {
        method: 'POST',
        path: config.apiPrefix + '/announcements/postAnnouncement',
        config: {
            description: 'Admin can post announcement',
            notes: 'Admin can post announcement.',
            tags: ['api', 'announcement'],
            auth: false,
            handler: (request, reply) => {
                announcement(request.payload, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                payload: validator.postAnnouncement,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },

    {
        method: 'GET',
        path: config.apiPrefix + '/announcements/announcementList',
        config: {
            description: 'announcements list',
            notes: 'announcements list.',
            tags: ['api', 'announcement'],
            auth: false,
    
            handler: (request, reply) => {
            announcementList(request.query, (err, results) => {
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
    
]