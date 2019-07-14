'use strict';

const statusCodes = require('http-status-codes');
const plugins = require('../../constants/routes-config');
const responses = require('../utilities/responses');
const config = require('../../configs/config');

const validator = require('../validators/equipment');
const addequipment = require('../controllers/Equipments/add-equipment');
const equipmentList= require('../controllers/Equipments/equipment-list');
const updateEquipment=require('../controllers/Equipments/update-equipment');
const equipmentListsetail=require('../controllers/Equipments/equipment-list-detail')

module.exports = [
    {
        method: 'POST',
        path: config.apiPrefix + '/Equipment/addEquipment',
        config: {
            description: 'Add Equipment',
            notes: 'Add Equipment.',
            tags: ['api', 'Equipment'],
            auth: false,
            handler: (request, reply) => {
                addequipment(request.payload, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                payload: validator.addEquipment,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },

    {
        method: 'GET',
        path: config.apiPrefix + '/Equipment/equipmentlist',
        config: {
            description: 'equipment list',
            notes: 'equipment list.',
            tags: ['api', 'Equipment'],
            auth: false,
    
            handler: (request, reply) => {
                equipmentList(request.query, (err, results) => {
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
        method: 'GET',
        path: config.apiPrefix + '/Equipment/equipmentlistdetail',
        config: {
            description: 'equipment list detail',
            notes: 'equipment list.',
            tags: ['api', 'Equipment'],
            auth: false,
    
            handler: (request, reply) => {
                equipmentListsetail(request.query, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                query: validator.equipmentDetailParam,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },
   
    {
        method: 'PUT',
        path: config.apiPrefix + '/Equipment/updateEquipment',
        config: {
            description: 'updateProfile',
            notes: 'updateProfile.',
            tags: ['api', 'Equipment'],
            auth: false,
            handler: (request, reply) => {
                updateEquipment(request.payload, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                payload: validator.updateEquipment,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },

]