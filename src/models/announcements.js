module.exports = function (sequelize, DataTypes) {
    return sequelize.define('announcements', {

        
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            subject:{
                type:DataTypes.STRING(100)
            },
            message:{
                type:DataTypes.STRING(500)
            },
            deleted: {
                type: DataTypes.INTEGER(4),
                defaultValue: '0'
            },
            date:{
                type:DataTypes.DATE
            }
                    
        
    },
     {
        tableName: 'announcements'
    });
}