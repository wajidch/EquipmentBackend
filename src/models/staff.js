module.exports = function (sequelize, DataTypes) {
    return sequelize.define('staff', {

        
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            staff_id:{
                type: DataTypes.INTEGER(11),

            },
            first_name:{
                type:DataTypes.STRING(45)
            },
            last_name:{
                type:DataTypes.STRING(45)
            },
            mobile_no:{
                type:DataTypes.STRING(45)

            },
            email:{
                type:DataTypes.STRING(45)
            },
            password:{
                type:DataTypes.STRING(45)
            },
            role:{
                type: DataTypes.STRING(45),
                defaultValue: 'Staff'      
            
            },
            profile_picture:{
                type:DataTypes.STRING(200)
            },
            job_title:{
                type: DataTypes.STRING(45),

            },
            department:{
                type: DataTypes.STRING(45),

            },
           
            deleted: {
                type: DataTypes.INTEGER(4),
                defaultValue: '0'
            },
                    
        
    },
     {
        tableName: 'staff'
    });
}