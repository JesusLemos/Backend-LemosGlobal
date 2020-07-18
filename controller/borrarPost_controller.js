const db = require('../models');

async function borrarPost(req , res){
try {
    const post = req.params.id;
    const borrarPost = await db.Post.findOne({
        where:{
            id:post
        }
    }).then(item => {
        item.destroy();
        res.json({
            message: 'Se ha borrado correctamente'
        });
    });

} catch (error) {
    console.log(error);
}

}

module.exports = borrarPost;