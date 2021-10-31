import prisma from "../prisma.js";
import { searchBooksByTopic, searchBook } from "../api.js";

export async function searchBookController(req, res) {
    const { bookName } = req.params

    if(!bookName) {
        res.status(400).json({message: "invalid request"})
    }

    try {

        const books = await searchBook(bookName);
        
        if(books) {
            const result = await prisma.books.createMany({
                data: books
            })
            if(!result) {
                console.log("unable to insert books to database")
            }
            res.json(books)
        } else {
            res.json([])
        }

    } catch(err) {
        console.log(err)
        res.status(500).json({message: "unable to get list of books"})
    }
}


export async function searchByAuthorController(req, res) {
    const { name } = req.params

    if(!name) {
        res.status(400).json({message: "invalid request"})
    }

    try {

        const books = await searchBook(name + "&column=author")

        if(books) {
            await prisma.books.createMany({
                data: books
            })
            return res.json(books);
            
        } else {
            return res.json([])
        }
        
    } catch(err) {
        console.log(err);
        res.status(500).json({message: "unable to get list of books by author name"})
    }
}

export async function searchByPublisherController(req, res) {
    const { name } = req.params

    if(!name) {
        res.status(400).json({message: "invalid request"})
    }

    try {

        const books = await searchBook(name + "&column=publisher")

        if(books) {
            await prisma.books.createMany({
                data: books
            })
            return res.json(books);
            
        } else {
            return res.json([])
        }
        
    } catch(err) {
        console.log(err);
        res.status(500).json({message: "unable to get list of books by publisher name"})
    }
}

export async function searchByTopicController(req, res) {
    const { name } = req.params

    if(!name) {
        res.status(400).json({message: "invalid request"})
    }

    try {

        const books = await searchBooksByTopic(name)

        if(books) {
            await prisma.books.createMany({
                data: books
            })
            return res.json(books);
            
        } else {
            return res.json([])
        }
        
    } catch(err) {
        console.log(err);
        res.status(500).json({message: "unable to get list of books by topic name"})
    }
}