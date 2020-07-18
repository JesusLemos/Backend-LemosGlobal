'use strict';
module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        nombre: {
            type: DataTypes.STRING(100),
            // allowNull: false,
            // validate: {
            //   notNull: { msg: "El campo es requerido" },
            // },
            
        },
        apellido: {
            type: DataTypes.STRING(100),
            // allowNull: true,
            // validate: {
            //   notNull: { msg: "El campo es requerido" },
            
            // },
        },
        num_telef: {
            type: DataTypes.BIGINT(8),
            
            // allowNull: false,
            // validate: {
            // notNull: { msg: "El campo es requerido" },
            // isInt:{msg:"El campo debe ser numeros"}
            // },
        },
        correo: {
            type: DataTypes.STRING(100),
            // allowNull: false,
            // validate: {
            // notNull: { msg: "El campo es requerido" },
            // isEmail:{msg:"El campo debe ser un correo electronico"}
        // },
        } ,
        rol: {
        type: DataTypes.STRING(10),
     },
    token: {
        type: DataTypes.STRING(100),
     },
} ,
 {tableName: 'usuarios'});
 Usuario.associate = (models) => {
     Usuario.hasMany(models.Post, {foreignKey: 'id_usuario'});
    //  Producto.hasMany(models.Pedido, {foreignKey: 'producto_id'});
 }
    return Usuario;

};