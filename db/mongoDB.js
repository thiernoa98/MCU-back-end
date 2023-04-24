const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);

function connectToMongoDB() {
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("MongoDB Connected");
    })
    .catch((error)=>{
        console.log('DB Connection Failed');
    })
}

module.exports = connectToMongoDB;

