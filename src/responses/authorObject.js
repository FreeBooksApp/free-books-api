const books = require('../data/books.json')

module.exports = function getAuthorObject(author) {
    return {
        id: author.id,
        name: author.name,
        profile: author.profile,
        about: author.profile,
        contact: author.contact,
        books: books.filter(book => book.author_id === author.id)
    }
}