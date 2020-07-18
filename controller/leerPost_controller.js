const db = require('../models');

async function leerPost(req , res){
try {
    const post = req.params.id;
    const leerPost = await db.Post.findOne({
        where:{
            id:post
        }
    }).then(item => {
        return res.status(200).send(item)
    })

} catch (error) {
    console.log(error);
}

}

module.exports = leerPost;