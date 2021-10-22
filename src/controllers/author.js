const authors = require('../data/authors.json')
const getAuthorObject = require('../responses/authorObject')


exports.getAuthors = () => {
    return authors.map(getAuthorObject)
}

exports.getAuthor = (id) => {
    return getAuthorObject(authors.find(author => author.id === id))
}