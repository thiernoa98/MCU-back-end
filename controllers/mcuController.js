const Mcu = require('../models/mcuModel');

async function getAllActors(req,res) {
    try {
        //find all actors
        let result = await Mcu.find({})

        res.json({
            message: 'success',
            payload: result
        })

    } catch (error) {
        let errorObj = {
            message: 'failed to get the data',
            payload: error
        }

        console.log(errorObj);
        res.json(errorObj);
    }
}

//get one Actor by name
async function getActorByName(req,res) {
    try {
        //find one actor by name
        let foundActor = await Mcu.findOne({name: req.params.name});

        res.json({
            message: 'success',
            payload: foundActor
        })

    } catch (error) {
        let errorObj = {
            message: 'failed to get Actor By name',
            payload: error
        }

        console.log(errorObj);
        res.json(errorObj);
    }
}

//creating characters/ acotrs
async function createActor(req,res) {
    try {
        let newActor = {
            //these names came from the modeSchema, which already in json
            name: req.body.name,
            debutFilm: req.body.debutFilm,
            debutYear: req.body.debutYear
        }

        //create the new element, actor
        await Mcu.create(newActor);

        res.json({
            message: 'success',
            payload: newActor
        })

    } catch (error) {
        let errorObj = {
            message: 'failed to create Actor',
            payload: error
        }
        //server side
        console.log(errorObj);

        //client side
        res.json(errorObj);
    }
}

//update actor
async function updateActor(req, res){
    try {
        //find the actor to be updated first, search it by id (dynamic param used)
        let targetActor = await Mcu.findOne({ _id: req.params.id })

        let updatedActor = {
            _id: targetActor._id, // This value never changes
            name: req.body.name, // to be changed
            debutFilm: req.body.debutFilm, //to be changed
            debutYear: req.body.debutYear //to be changed
        }

        await Mcu.updateOne(
            { _id: req.params.id },
            { $set: updatedActor },
            { upsert: true }
        )
        
        //show what's updated in json format
        res.json({
            message: "success",
            payload: updatedActor
        })
    } catch (error) {
        let errorObj = {
            message: 'failed to delete Actor',
            payload: error
        }
        //server side
        console.log(errorObj);

        //client side
        res.json(errorObj);
    }
}

//delete actor
async function deleteActor(req,res) {
    try {
        let targetActor = req.params.id;
        let deletedActor = await Mcu.deleteOne({_id: targetActor});

        res.json({
            message: 'success',
            payload: deletedActor
        })
    } catch (error) {
        let errorObj = {
            message: 'failed to delete Actor',
            payload: error
        }
        //server side
        console.log(errorObj);

        //client side
        res.json(errorObj);
    }
}

//export this to the router
module.exports = {
    getAllActors,
    createActor,
    getActorByName,
    updateActor,
    deleteActor
}