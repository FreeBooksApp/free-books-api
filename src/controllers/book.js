const prisma = require('../prisma')

exports.getBooks = async () => {
    const books = await prisma.books.findMany({
        include: {
            author: true,
            publisher: true
        }
    })
    console.log(books)
    return books
}

exports.getBook = async (id) => {
    try {

        const book = await prisma.books.findUnique({
            where: {
                id: id
            }, 
            include: {
                author: true,
                publisher: true
            }  
        })
        console.log(book)
        return book;
    } catch(err) {
        throw new Error("unable to get book with id: " + id)
    }
}

exports.updateBook = async (id, book) => {
    try {

        const updatedBook = prisma.books.update({
            where: {
                id: id
            }, 
            data: book
        })

        console.log(updatedBook)
        return updatedBook
        
    } catch(err) {
        throw new Error("unable to update book")
    }
}

exports.createBook = async (book) => {
    try {
        const {author_id, publisher_id, ...rest} = book

        const result = await prisma.books.create({
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

        return result;
         
    } catch(err) {
        throw err
    }
}

exports.deleteBook = async (id) => {
    try {
        // TODO: also delete files related to this book
        const result = await prisma.books.delete({
            where: {
                id: id
            }
        })
        console.log(result)
        return result
    } catch(err) {
        throw new Error("unable to delete book from database")
    }
}