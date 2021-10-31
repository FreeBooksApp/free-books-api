import express from 'express'
const router = express.Router();
import {
    getBook, 
    getBooks,
} from '../controllers/book.js'

router.get('/', (req, res) => {

    const skip = req.params.skip || 0
    const take = req.params.take || 20
    // return list of all books (with pagination)
    getBooks({skip, take})
        .then(books => {
            res.json(books)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "cannot get list of books"})
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

export default router
