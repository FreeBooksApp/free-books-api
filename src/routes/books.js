const express = require('express')
const router = express.Router();

const {
    getBook, 
    getBooks,
    updateBook,
    deleteBook,
    createBook
} = require('../controllers/book')

router.get('/', (req, res) => {
    // return list of all books (with pagination)
    getBooks()
        .then(books => {
            res.json(books)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
})

router.post('/', (req, res) => {
    // upload new book
    const book = req.body;

    createBook(book).then(result => {
        res.json(result)
    }).catch(err => {
        res.status(500).json({message: err.message})
    })
})

router.get('/:id', (req, res) => {
    // get info about single book
    const { id } = req.params
    
    getBook(Number(id))
        .then(book => {
            return res.json(book)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
})

router.put('/:id', (req, res) => {
    // update book info
    const { id } = req.params;

    if(isNaN(Number(id))) {
        return res.status(400).json({message: "invalid request"});
    }

    if(!validateBook(req.body)) {
        return res.status(400).json({message: "invalid request (body)"})
    }

    updateBook(Number(id), req.body)
})

router.delete('/:id', (req, res) => {
    // delete book
})

module.exports = router