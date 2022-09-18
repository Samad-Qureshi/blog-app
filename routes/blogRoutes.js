const express = require('express');
const blogController = require('../controllers/blogControllers')
const router = express.Router();

//All Blogs
router.get('/',blogController.blog_index);


//Post Blog
router.get('/create',blogController.blog_create_get)

//Add Blog
router.post('/',blogController.blog_create_post)


//Get Blog
router.get('/:id',blogController.blog_details)


//Delete Blog
router.delete('/:id',blogController.blog_detele)


module.exports = router;