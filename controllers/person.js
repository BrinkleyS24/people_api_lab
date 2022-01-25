const express = require('express');
const peopleRouter = express.Router();
const People = require('../models/People.js');

// Index
peopleRouter.get("/", async (req, res) => {
    try {
        // send all people
        res.json(await People.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// Create
peopleRouter.post('/', async (req, res) => {
    try {
        res.json(await People.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = peopleRouter