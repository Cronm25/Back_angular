const router = require('express').Router();

router.use('/comments',require('./api/comments.js'))

module.exports=router
