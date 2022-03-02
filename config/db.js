const mongoose = require('mongoose')


let monngodb_url = 'mongodb+srv://samheart:samheart23@secondtestcluster0.4rbkx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


// mongoose.connect(monngodb_url)
// .then(()=>{
//     console.log("mongodb is connected");
// }).catch((error)=>{
//     console.log("mondb not connected");
//     console.log(error);
// // });

const connectDB = async () => {

  try {
    const conn = await mongoose.connect(monngodb_url)
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB
