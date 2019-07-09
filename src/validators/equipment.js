'use strict';

const Joi = require('joi');

const addEquipment = Joi.object({
    serialNo:Joi.string().optional(),
    equipmentName:Joi.string().optional(),
    brand:Joi.string().optional(),
    model:Joi.string().optional(),
    lifespan:Joi.string().optional(),
    leaseStatus:Joi.string().optional(),
    leasePeriod:Joi.string().optional(),
    insuranceHistory:Joi.string().optional(),
    device1:Joi.string().optional(),
    device2:Joi.string().optional(),
    device3:Joi.string().optional(),
    accessories1:Joi.string().optional(),
    accessories2:Joi.string().optional(),
    accessories3:Joi.string().optional(),
});

const updateEquipment = Joi.object({
    equipment_id:Joi.number().integer().required(),
    serialNo:Joi.string().optional(),
    equipmentName:Joi.string().optional(),
    brand:Joi.string().optional(),
    model:Joi.string().optional(),
    lifespan:Joi.string().optional(),
    leaseStatus:Joi.string().optional(),
    leasePeriod:Joi.string().optional(),
    insuranceHistory:Joi.string().optional(),
    device1:Joi.string().optional(),
    device2:Joi.string().optional(),
    device3:Joi.string().optional(),
    accessories1:Joi.string().optional(),
    accessories2:Joi.string().optional(),
    accessories3:Joi.string().optional(),
});


module.exports = {
    addEquipment,
    updateEquipment
};