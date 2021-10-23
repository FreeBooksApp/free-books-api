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
            res.status(500).json({message: "cannot get list of books"})
        })
})

router.post('/', (req, res) => {
    // upload new book
    const book = req.body;
    book.pages_count = Number(book.pages_count) || null;

    createBook(book)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "cannot create book"})
        })
})

router.get('/:id', (req, res) => {
    // get info about single book
    const { id } = req.params
    if(isNaN(Number(id))) {
        return res.status(400).json({message: "invalid request"});
    }
    
    getBook(Number(id))
        .then(book => {
            return res.json(book)
        })
        .catch(err => {
            console.log({err})
            res.status(500).json({message: "unable to get book"})
        })
})

router.put('/:id', (req, res) => {
    // update book info
    const { id } = req.params;

    if(isNaN(Number(id))) {
        return res.status(400).json({message: "invalid request"});
    }

    updateBook(Number(id), req.body)
        .then(result => {
            console.log(result)
            res.json(result)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "cannot update book"})
        })
})

router.delete('/:id', (req, res) => {
    // delete book
    const {id} = req.params
    if(isNaN(Number(id))) {
        return res.status(400).json({message: "invalid request"});
    }

    deleteBook(Number(id))
        .then(result => {
            res.json({message: "deleted successfully"})
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
})

module.exports = router