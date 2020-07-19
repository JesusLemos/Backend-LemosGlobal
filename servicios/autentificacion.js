const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const conSecreta = process.env.JWT_SECRET || 'ADLSNVLSNDLKNVSDFT';

async function contrasenyaConHash(contrasenya){
    return await bcrypt.hash(contrasenya, 10)
}
 
async function compararContrasenia(contrasenya, hash){
    return await bcrypt.compare(contrasenya, hash)
}


async function crearJWT(data){
    return jwt.sign(data, conSecreta);
}

module.exports = {
    contrasenyaConHash,
    compararContrasenia,
    crearJWT
}