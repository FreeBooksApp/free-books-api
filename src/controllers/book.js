const books = require('../data/books.json')
const authors = require('../data/authors.json')
const publishers = require('../data/publishers.json')
const getBookObject = require('../responses/bookObject')

exports.getBooks = () => {
    return books.map(getBookObject)
}

exports.getBook = (id) => {
    return getBookObject(books.find(book => book.id === id))
}