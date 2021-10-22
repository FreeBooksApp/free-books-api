const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    // return list of all <resource> (with pagination)
})

router.post('/', (req, res) => {
    // upload new <resource>
})

router.get('/:id', (req, res) => {
    // get info about single <resource>
})

router.put('/:id', (req, res) => {
    // update <resource> info
})

router.delete('/:id', (req, res) => {
    // delete <resource>
})