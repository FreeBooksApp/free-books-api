import getBooks from './getBooks.js'
import prisma from '../prisma.js'

async function run() {

    const books = await getBooks(1, 10)
    
    await prisma.books.createMany({
        data: books
    })
}

run()
