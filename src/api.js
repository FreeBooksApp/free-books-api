import prisma from './prisma.js'

import getBooks from './utils/getBooks.js'
import searchBooks from './utils/searchBook.js'


export function getBookFromAPI(id) {
    return getBooks(id) 
}

export async function searchBookByTitle(query) {
    return await searchBooks(query.replaceAll(/\s/, '+'))
}

export async function searchBook(query) {
    return await searchBooks(query)
}


export async function searchBooksByTopic(topicStr) {
    const result = await prisma.topics.findMany({
        where: {
            name: {
                contains: topicStr
            }
        }
    })

    return await searchBooks(`topicId${result[0].id}?column=topic`);    
}