const prisma = require('../prisma')

exports.getAuthor = (id) => {
    return prisma.authors.findUnique({
        where: {
            id: id
        },
        include: {
            books: true
        }
    })
}

exports.getAuthors = () => {
    return prisma.authors.findMany({
        include: {
            books: true
        }
    })
}

exports.createAuthor = (author) => {
    return prisma.authors.create({
        data: author
    })
}

exports.updateAuthor = (id, author) => {
    return prisma.authors.update({
        where: {
            id: id
        },
        data: author
    })
}

exports.deleteAuthor = (id) => {

    // first delete all of the author's books then the author
    return prisma.$transaction([
        prisma.books.deleteMany({
            where: {
                author_id: id
            }
        }),
        prisma.authors.delete({
            where: {
                id: id
            }
        })
    ])
}