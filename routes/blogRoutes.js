const express = require('express');


const BlogRoutes = express.Router()

const {GetAllBlogs, Getblog, SetBlog, UpdateBlog} = require('../controller/blogController')




BlogRoutes.get('/',GetAllBlogs )
BlogRoutes.get('/:id',Getblog )
BlogRoutes.post('/create',SetBlog )
BlogRoutes.patch('/:id',UpdateBlog )
// BlogRoutes.put('/:id',UpdateBlog )









module.exports = BlogRoutes
