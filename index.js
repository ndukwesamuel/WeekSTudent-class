const express = require('express')
const mongoose = require('mongoose');

const  cors = require("cors");

const app = express()
const port = 8000

const BlogRoutes = require('./routes/blogRoutes')


// middleware
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended:true}))
mongoose.connect('mongodb://localhost:27017/CwayBlog')
.then( (result) => console.log('db connected'))
.catch((err) => console.log(err))

app.use('/api/v1/blog/',   BlogRoutes )




// app.use('/', BlogRoutes )


// app.get('/test', (req, res) => {
//     const blog =  new Blog({
//         name:'samheart',
//         title: ' man u',
//         description: ' best team '
//     })

//     blog.save()
//     .then( result => res.json(result))
//     .catch(err => console.log(err))
// })




app.listen( port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

} )
