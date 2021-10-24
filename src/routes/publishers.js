const express = require('express');
const router = express.Router();

const {
    getPublisher, 
    getPublishers, 
    createPublisher, 
    updatePublisher, 
    deletePublisher
} = require('../controllers/publisher')

router.get('/', (req, res) => {
    // return list of all publishers (with pagination)
    getPublishers()
        .then(publishers => {
            console.log(publishers)
            res.json(publishers)
        })
        .catch(err => console.log(err))
})

router.post('/', (req, res) => {
    // register new Publisher
    const publisher = req.body

    createPublisher(publisher)
        .then(result => {
            console.log(result)
            res.json(result)
        })
        .catch(err => console.log(err))

})

router.get('/:id', (req, res) => {
    // get info about single Publisher
    const {id} = req.params
    
    if(isNaN(Number(id))) {
        return res.status(400).json({message: "invalid request"});
    }

    getPublisher(Number(id))
        .then(publisher => {
            if(!publisher) {
                return res.status(404).json({message: "publisher not found"})
            }
            res.json(publisher)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({messge: "Internal Error"})
        })

})

router.put('/:id', (req, res) => {
    // update Publisher info
    const {id} = req.params;
    const publisher = req.body;

    if(isNaN(Number(id))) {
        return res.status(400).json({message: "invalid request"});
    }

    updatePublisher(Number(id), publisher)
        .then(result => {
            console.log(result)
            res.json(result)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "cannot update publisher"})
        })
})

router.delete('/:id', (req, res) => {
    // delete Publisher
    const {id} = req.params
    
    if(isNaN(Number(id))) {
        return res.status(400).json({message: "invalid request"});
    }

    deletePublisher(Number(id))
        .then(result => {
            res.json({message: "publisher deleted successfully"})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "cannot delete publisher"})
        })
})

module.exports = router