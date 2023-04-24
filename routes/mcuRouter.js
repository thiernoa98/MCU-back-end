const express = require('express');
const router = express();

const {getAllActors, createActor, getActorByName,updateActor, deleteActor} = require('../controllers/mcuController');

//getting the acortors
//localhost:5000/api/getAllactors
router.get('/getAllactors', getAllActors);

//getting just one actor by name
//localhost:5000/api/getActorByName/:name
router.get('/getActorByName/:name', getActorByName);

//creating a new Actor
//localhost:5000/api/creatActor
router.post('/creatActor', createActor);

//update
//localhost:5000/api/updateActor/:id
router.put('/updateActor/:id', updateActor);

//delete
//localhost:5000/api/deleteActor/:id
router.delete('/deleteActor/:id', deleteActor);

//export to index.js
module.exports = router;