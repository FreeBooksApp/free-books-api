const express = require('express');
const router = express.Router();
const {
    getAuthor, 
    getAuthors, 
    createAuthor, 
    updateAuthor, 
    deleteAuthor
} = require('../controllers/author')

router.get('/', (req, res) => {
    // return list of all authors (with pagination)
    getAuthors()
        .then(authors => {
            console.log(authors)
            res.json(authors)
        })
        .catch(err => console.log(err))
})

router.post('/', (req, res) => {
    // register new author
    const author = req.body

    createAuthor(author)
        .then(result => {
            console.log(result)
            res.json(result)
        })
        .catch(err => console.log(err))

})

router.get('/:id', (req, res) => {
    // get info about single author
    const {id} = req.params
    if(!Number(id)) return res.status(400).json({message: "invalid request"})
    getAuthor(Number(id))
        .then(author => {
            if(!author) {
                return res.status(404).json({message: "Author not found"})
            }
            res.json(author)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({messge: "Internal Error"})
        })

})

router.put('/:id', (req, res) => {
    // update author info
    const {id} = req.params;
    const author = req.body;

    if(!Number(id)) return res.status(400).json({message: "invalid request"})

    updateAuthor(Number(id), author)
        .then(result => {
            console.log(result)
            res.json(result)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "cannot update author"})
        })
})

router.delete('/:id', (req, res) => {
    // delete author
    const {id} = req.params
    if(!Number(id)) return res.status(400).json({message: "invalid request"})

    deleteAuthor(Number(id))
        .then(result => {
            res.json({message: "author deleted successfully"})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "cannot delete author"})
        })
})

module.exports = router