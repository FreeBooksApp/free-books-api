import prisma from '../prisma.js'
import {getBookFromAPI} from '../api.js'

export const getBooks = ({skip, take}) => {
    return prisma.books.findMany({
        take, 
        skip,
        include: {
            topic: true
        }
    })
}

export const getBook = async(id) => {

    try {

        const result = await prisma.books.findUnique({
            where: {
                id: id
            }, include: {
                topic: true
            }
        })
        if(result)
            return result
        else throw new Error("not found")
    } catch(err) {
        // maybe book not found
        // if book is not found get from libgen

        console.log(err)

        const book = await getBookFromAPI(id)
        
        const result = await prisma.books.create({data: book})

        console.log("TODO: if result is complete return that instead of book")

        if(!result) {
            console.log("cannot add to database")
        }
        return book;
    }
}
