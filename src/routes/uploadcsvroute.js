
'use strict';

const statusCodes = require('http-status-codes');
const plugins = require('../../constants/routes-config');
const responses = require('../utilities/responses');
const config = require('../../configs/config');

const validator = require('../validators/equipment');
const uploadloanCSV = require('../controllers/uploadCSV/upload-loan-csv');
const uploadlistCSV = require('../controllers/uploadCSV/upload-list-csv');



module.exports = [
    {
        method: 'POST',
        path: config.apiPrefix + '/upload/uploadLoanCSV',
        config: {
            description: 'uploadCSV',
            notes: 'uploadCSV.',
            tags: ['api', 'Equipment'],
            auth: false,
            handler: (request, reply) => {
                uploadloanCSV(request.payload, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                payload: validator.uploadCSV,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },
    {
        method: 'POST',
        path: config.apiPrefix + '/upload/uploadListCSV',
        config: {
            description: 'uploadCSV',
            notes: 'uploadCSV.',
            tags: ['api', 'Equipment'],
            auth: false,
            handler: (request, reply) => {
                uploadlistCSV(request.payload, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                payload: validator.uploadCSV,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },
]

