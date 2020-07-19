const db = require('../models');
const bcrypt = require('bcryptjs');



async function compararContrasenia(contrasenia, hash){
    console.log(contrasenia, hash)
    return await bcrypt.compare(contrasenia, hash)
}

async function loginUsuario(req, res) {
    try {
        const usuario = req.body;
        const comprobarUsuario = await db.Usuario.findOne({
            where:{
                correo: usuario.correo
            }
        });
        const comprobarContrasenia = await compararContrasenia(req.body.contrasenia, comprobarUsuario.contrasenia)
        if (comprobarContrasenia) {
           res.send('coincide')
        }else{
            throw new Error('contrasenia no valida')
            
        }
       
    } catch (error) {
        console.log(error);
        
    }

}

module.exports = loginUsuario;