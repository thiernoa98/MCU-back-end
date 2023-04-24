const express = require('express');
const app = express();
require('dotenv').config();
const connectToMongoDB = require('./db/mongoDB');
const logger = require('morgan');
const cors = require('cors');
/*
    MIDDLEWARE 
*/
app.use(logger('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//the cors help run only one server, and not interfer with each other
const corsOptions = {
    origin: '*',
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))
/*
    Routing
*/
//localhost:5000/api
const mcuRouter = require('./routes/mcuRouter');
app.use('/api', mcuRouter);

/*
    Port
*/
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`app is listening on port ${PORT}`);
    connectToMongoDB();
})