const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const  cors = require("cors");
// const connectDB = require('./config/db')

const {Blog } = require('./models/blogModel')

const app = express()
const port = 8000


// let monngodb_url = 'mongodb+srv://samheart:samheart23@secondtestcluster0.4rbkx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const BlogRoutes = require('./routes/blogRoutes')

// connectDB()




// middleware
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017/CwayBlog')
.then( (result) => console.log('db connected'))
.catch((err) => console.log(err))
// mongoose.connect(process.env.MONGO_URI)
// .then( (result) => console.log('db connected'))
// .catch((err) => console.log(err))

// mongoose.connect(monngodb_url)
// .then(()=>{
//     console.log("mongodb is connected");
// }).catch((error)=>{
//     console.log("mondb not connected");
//     console.log(error);
// });


// app.use('/api/v1/blog/', cors,  BlogRoutes )
app.use('/', BlogRoutes)



// app.use('/', BlogRoutes )


app.get('/test', (req, res) => {
    const blog =  new Blog({
        name:'peter',
        title: ' man u',
        description: ' best team '
    })

    blog.save()
    .then( result => res.json(result))
    .catch(err => console.log(err))
})




app.listen( port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

} )
