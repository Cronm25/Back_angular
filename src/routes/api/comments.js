const router = require('express').Router();

const CommentsController = require('../../controllers/comments.controller.js');

router.get('/', CommentsController.getAllComments);
router.post('/new_comments', CommentsController.createComments)
router.put('/:id',CommentsController.deleteComment)
router.delete('/:id', CommentsController.deleteComment)


module.exports = router;