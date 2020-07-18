'use strict';
module.exports =(sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
  
        id_usuario: {
            type: DataTypes.INTEGER(11),
            // allowNull: true,
            // validate: {
                //   notNull: { msg: "El campo es requerido" },
                
                // },
            },
            
            comentario: {
                type: DataTypes.STRING(100),
            // allowNull: false,
            // validate: {
            // notNull: { msg: "El campo es requerido" },
            // isInt:{msg:"El campo debe ser numeros"}
            // },
        },
     } ,
 {tableName: 'posts'});
 Post.associate = (models) => {
    // Post.hasMany(models.Post, {foreignKey: 'id_Post'});
    Post.belongsToMany(models.Usuario , { through: models.Like })
   //  Producto.hasMany(models.Pedido, {foreignKey: 'producto_id'});
}
    return Post;

}