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
    return Post;

}