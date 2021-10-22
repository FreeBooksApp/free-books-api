const express = require('express')
const router = express.Router();

const {getPublisher, getPublishers} = require('../controllers/publisher')

router.get('/', (req, res) => {
    // return list of all publishers (with pagination)
    return res.json(getPublishers())
})

router.post('/', (req, res) => {
    // upload new publisher
})

router.get('/:id', (req, res) => {
    // get info about single publisher
    const {id} = req.params
    const id_int = parseInt(id)

    if(isNaN(id)) {
        return res.status(400).json({message: "invalid request"})
    }

    const publisher = getPublisher(id_int);
    if(!publisher) {
        return res.status(404).json({message: "Publisher not found"})
    }
    return res.json(publisher)
})

router.put('/:id', (req, res) => {
    // update Publisher info
})

router.delete('/:id', (req, res) => {
    // delete Publisher
})

module.exports = router