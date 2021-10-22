const express = require('express')
const router = express.Router();

const {getBook, getBooks} = require('../controllers/book')

router.get('/', (req, res) => {
    // return list of all books (with pagination)
    res.json(getBooks())
})

router.post('/', (req, res) => {
    // upload new book
})

router.get('/:id', (req, res) => {
    // get info about single book
    const { id } = req.params
    if(!id) {
        res.status(400).json({message: "invalid request"})
    }
    // change type of id from string to integer
    const book = getBook(parseInt(id))
    if(!book) {
        return res.status(404).json({message: "book not found"})
    } else {
        return res.json(book)
    }
})

router.put('/:id', (req, res) => {
    // update book info
})

router.delete('/:id', (req, res) => {
    // delete book
})

module.exports = router