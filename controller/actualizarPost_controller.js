const db = require('../models');

async function actualizarPost(req, res){

    try{
        const postId = req.params.id;
        const post = req.body.post;

        const actualizar = await db.Post.findOne({
            where:{
                id:postId
            }

        }).then(item =>{ 
             item.update({comentario:post});
            res.json({
                message: 'Se ha actualizado correctamente'
            });
            
        });
        
        
    }catch(error){
        console.log(error);
        
    }


}

module.exports = actualizarPost;