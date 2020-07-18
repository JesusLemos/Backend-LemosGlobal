const db = require('../models');

async function crearPost (req, res) {
   try{
    const prueba = req.body;
    
        const crearPost = await db.Post.create(req.body);
        res.status(200).json({
            message:'se ha creado correctamente'
        })
        return res.send(prueba);


}catch(error){
    console.log(error)
}
       
}

module.exports = crearPost;