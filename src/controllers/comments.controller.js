const {Comments} = require("../models/comments.model");

const getAllComments = async (req, res) => {
    try {
        const comments = await Comments.findAll();
        res.status(200).json({
        ok: true,
        status: 200,
        body: comments,
    });
    } catch (error) {
        console.error('Error getting comments:', error);
        res.status(500).send('An error occurred while obtaining comments');
    }
}

const createComments = async (req, res) => {
   
    try {
        
        const { 
            name,
            txt,
            points,
            for_
        } = req.body
        await Comments.create({
                 name,
                 txt,
                 points,
                 for_
                 })
        res.status(201).json("New comment created")
      } catch (error) {
        res.status(500).json({ error: error.message })
      }
}

const updateComment = async (req, res) => {
    try {
        const { 
            name,
            txt,
            points,
            for_
        } = req.body
        const  id  = req.params.id
        await Comments.update(datos,{where:{id}})
        res.status(202).json("Update finished")
      } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
      }
}

const deleteComment = async (req, res) => {
    try {
        const  id  = req.params.id
        await Comments.destroy({where:{id}})
        res.status(202).json("Comment Deleted")
      } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
      }
}




module.exports = { getAllComments, createComments, updateComment, deleteComment }