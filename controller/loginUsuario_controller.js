const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const conSecreta = process.env.JWT_SECRET || 'ADLSNVLSNDLKNVSDFT';
const { compararContrasenia, crearJWT} = require('../servicios/autentificacion');

async function loginUsuario(req, res) {
    try {
        const usuario = req.body;
        const comprobarUsuario = await db.Usuario.findOne({
            where:{
                correo: usuario.correo
            }
        });
        const comprobarContrasenia = await compararContrasenia(req.body.contrasenia, comprobarUsuario.contrasenia)
        if (!comprobarContrasenia) {
            throw new Error('contrasenia no valida')
        }
        const datos ={
            nombre: usuario.nombre,
            correo: usuario.correo,
            id: usuario.id

        }

        //Otra alternativa de almacenar pero seria Patch en vez de post
    //    usuario.token = await crearJWT(datos);
    //    await comprobarUsuario.update({token: usuario.token});
        comprobarUsuario.token = await crearJWT(datos);
        await comprobarUsuario.save();
        res.send('usuario actualizado');

    } catch (error) {
        console.log(error);
        
    }

}

module.exports = loginUsuario;