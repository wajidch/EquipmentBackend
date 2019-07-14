'use strict';

const Joi = require('joi');

const addEquipment = Joi.object({
    serialNo:Joi.string().empty('').optional(),
    equipmentName:Joi.string().empty('').optional(),
    equipmentType:Joi.string().empty('').optional(),
    brand:Joi.string().empty('').optional(),
    model:Joi.string().empty('').optional(),
    lifespan:Joi.string().empty('').optional(),
    leaseStatus:Joi.string().empty('').optional(),
    leasePeriod:Joi.string().empty('').optional(),
    insuranceHistory:Joi.string().empty('').optional(),
    device1:Joi.string().empty('').optional(),
    device2:Joi.string().empty('').optional(),
    device3:Joi.string().empty('').optional(),
    accessories1:Joi.string().empty('').optional(),
    accessories2:Joi.string().empty('').optional(),
    accessories3:Joi.string().empty('').optional(),
});

const updateEquipment = Joi.object({
    equipment_id:Joi.number().integer().required(),
    serialNo:Joi.string().empty('').optional(),
    equipmentName:Joi.string().empty('').optional(),
    equipmentType :Joi.string().empty('').optional(),
    brand:Joi.string().empty('').optional(),
    model:Joi.string().empty('').optional(),
    lifespan:Joi.string().empty('').optional(),
    leaseStatus:Joi.string().empty('').optional(),
    leasePeriod:Joi.string().empty('').optional(),
    insuranceHistory:Joi.string().empty('').optional(),
    device1:Joi.string().empty('').optional(),
    device2:Joi.string().empty('').optional(),
    device3:Joi.string().empty('').optional(),
    accessories1:Joi.string().empty('').optional(),
    accessories2:Joi.string().empty('').optional(),
    accessories3:Joi.string().empty('').optional(),
});

const equipmentDetailParam={
    equipment_id:Joi.number().integer().required(),

}
const deleteEquipment={
    equipment_id:Joi.number().integer().required(),


}
module.exports = {
    addEquipment,
    updateEquipment,
    equipmentDetailParam,
    deleteEquipment
};