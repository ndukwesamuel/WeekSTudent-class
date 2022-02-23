const asyncHandler = require('express-async-handler')
const {Blog} = require('../models/blogModel')

// all the blogs
const GetAllBlogs = asyncHandler( async (req, res ) => {

    const data = await Blog.find().sort({createdAt: -1})
    res.status(200).json({
        message : 'get all data',
        data
    })

})

// one blog

const Getblog = (req, res) => {
    const id = req.params.id
    Blog.findById(id)
    .then(data => res.status(200).json({
        message: `Get ${id} Blog `,
        data
    }))
    .catch(err => res.json(err))
    
}


const SetBlog = asyncHandler( async (req, res) => {
    console.log(req.body);
    if (!req.body){
        res.status(400)
        throw new Error('please addd a text to the field ')
    }

    console.log(req.body)
    let data = await new Blog(req.body)
    data = await data.save() 
    res.status(200).json(data)

})

const UpdateBlog = asyncHandler(
    async(req, res) =>{
        const id = req.params.id
        let data = await Blog.findById(id)
        const data_body = req.body

        if(!req.body){
            res.status(400)
            throw new Error('please add a text field')
        }
        console.log(req.body);
 const Updatepost = await Blog.findByIdAndUpdate(data, data_body,{
            new: true
        })
        res.status(201).json(Updatepost)
    }
)


const DeleteBlog = asyncHandler(async (req, res) => {
    const id = req.params.id
    const data = await Blog.findById(id)
    if(!data){
        res.status(400)
        throw new Error('Blog not FOund')
    }
    await data.remove()

    res.status(200).json({id : `${id} no longer exist`})
})


module.exports = {
    GetAllBlogs,
    Getblog,
    SetBlog,
    UpdateBlog
}