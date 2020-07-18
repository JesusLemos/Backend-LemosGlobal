'use strict';
module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        nombre: {
            type: DataTypes.STRING(35),
            allowNull: false,
            validate: {
              notNull: { msg: "El nombre es obligatorio" },
              notEmpty:{msg:"El nombre no puede estar vacio"}
            },
            
        },
        apellido: {
            type: DataTypes.STRING(35),
            // allowNull: true,
            // validate: {
            //   notNull: { msg: "El campo es obligatorio" },
            
            // },
        },
        num_telef: {
            type: DataTypes.BIGINT(8),
            
            allowNull: false,
            validate: {
                notNull: { msg: "El numero de telefono es obligatorio" },
                isInt:{ msg:"El numero de telefono debe ser numeros" },

            },
        },
        correo: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique:true,
            validate: {
                notNull: { msg: "El correo es obligatorio" },
                isEmail:{msg:"El correo debe ser un correo electronico valido (ejemplo@gmail.com)"}
        },
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
     Usuario.belongsToMany(models.Post, { through: models.Like })
    //  Producto.hasMany(models.Pedido, {foreignKey: 'producto_id'});
 }
    return Usuario;

};