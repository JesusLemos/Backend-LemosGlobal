const db = require('../models');
const bcrypt = require('bcryptjs');

async function contrasenyaConHash(contrasenya){
    return await bcrypt.hash(contrasenya, 10)
}

async function registroUsuario(req, res){
    try {
        req.body.contrasenia = await contrasenyaConHash(req.body.contrasenia);
        const usuario = req.body;
        const crearUsuario = await db.Usuario.create(usuario).then(item =>{
            res.status(200).json({
                message:'Se ha creado correctamente'
            })
        });
    } catch (error) {
        console.log(error);
        
        if(error.name === 'SequelizeValidationError'){
            return res.status(400).json({
                message:error.errors[0].message
            });
        }
        if(error.name === 'SequelizeUniqueConstraintError'){
            return res.status(400).json({
                //solo el campo del correo es unico
                message:'Este correo electronico ya ha sido utilizado'
            });
        }
    }

    
    

}

module.exports = registroUsuario;