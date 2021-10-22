const authors = require('../data/authors.json')
const publishers = require('../data/publishers.json')

module.exports = function getBookObject(book) {
    return {
        id: book.id,
        title: book.title,
        cover: book.cover,
        pages_count: book.pages_count,
        download_count: book.download_count,
        author: authors.find(author => author.id === book.author_id),
        publisher: publishers.find(publisher => publisher.id === book.publisher_id),  
        categories: book.categories,
        published_at: book.published_at,
        registered_at: book.registered_at,   
    }
}