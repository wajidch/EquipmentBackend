module.exports = function (sequelize, DataTypes) {
    return sequelize.define('equipments', {

        
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            serialNo:{
                type:DataTypes.STRING(45)
            },
            equipmentType:{
                type:DataTypes.STRING(45)

            },
            equipmentName:{
                type:DataTypes.STRING(45)
            },
            brand:{
                type:DataTypes.STRING(45)
            },
            model:{
                type: DataTypes.STRING(45),
            
            },
          
            lifespan:{
                type:DataTypes.STRING(45)
            },
            leaseStatus:{
                type:DataTypes.STRING(45)
            },
            leasePeriod:{
                type:DataTypes.STRING(45)
            },
            insuranceHistory:{
                type:DataTypes.STRING(45)
            },
            device1:{
                type:DataTypes.STRING(45)
            },
            device2:{
                type:DataTypes.STRING(45)
            },
            device3:{
                type:DataTypes.STRING(45)
            },
            accessories1:{
                type:DataTypes.STRING(45)
            },
            accessories2:{
                type:DataTypes.STRING(45)
            },
            accessories3:{
                type:DataTypes.STRING(45)
            },
            
            deleted: {
                type: DataTypes.INTEGER(4),
                defaultValue: '0'
            },
                    
        
    },
     {
        tableName: 'equipments'
    });
}