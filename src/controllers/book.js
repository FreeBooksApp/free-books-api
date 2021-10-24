const prisma = require('../prisma')

exports.getBooks = () => {
    return prisma.books.findMany({
        include: {
            author: true,
            publisher: true
        }
    })
}

exports.getBook = (id) => {
    return prisma.books.findUnique({
        where: {
            id: id
        }, 
        include: {
            author: true,
            publisher: true
        }  
    })
}

exports.updateBook = async (id, book) => {

    if(book.author_id) book.author_id = Number(book.author_id)
    if(book.publisher_id) book.publisher_id = Number(book.publisher_id)
    if(book.pages_count) book.pages_count = Number(book.pages_count)


    return prisma.books.update({
        where: {
            id: id
        }, 
        data: book
    })
}

exports.createBook = async (book) => {
    const {author_id, publisher_id, ...rest} = book

    return await prisma.books.create({
        data: {
            ...rest,
            author: {
                connect: {
                    id: Number(author_id)
                }
            },
            publisher: {
                connect: {
                    id: Number(publisher_id)
                }
            }
        }
    })
}

exports.deleteBook = (id) => {
    // TODO: also remove related files

    return prisma.books.delete({
        where: {
            id: id
        }
    })
}