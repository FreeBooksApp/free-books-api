const express = require('express')
const router = express.Router();

const {getAuthor, getAuthors} = require('../controllers/author')

router.get('/', (req, res) => {
    // return list of all authors (with pagination)
    return res.json(getAuthors())
})

router.post('/', (req, res) => {
    // upload new author
})

router.get('/:id', (req, res) => {
    // get info about single author
    const {id} = req.params
    const id_int = parseInt(id)

    if(isNaN(id)) {
        return res.status(400).json({message: "invalid request"})
    }

    const author = getAuthor(id_int);
    if(!author) {
        return res.status(404).json({message: "Author not found"})
    }
    return res.json(author)
})

router.put('/:id', (req, res) => {
    // update author info
})

router.delete('/:id', (req, res) => {
    // delete author
})

module.exports = router