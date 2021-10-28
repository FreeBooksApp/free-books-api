import fetch from 'node-fetch'
import cheerio from 'cheerio'

export default async function getBookInfo(id, to) {

    let ids = ""

    if(to) {

        for(let i = id; i<to; i++) {
            ids += i + ","

        }
        ids = ids + to
    
        console.log(ids)
    } else {
        ids = id
    } 

    const res1 = await fetch(`https://libgen.is/json.php?ids=${ids}&fields=*`);
    const books = await res1.json()

    const result = await Promise.all(books.map(async book => {

        console.log("getting download link of: " + book.title)        
        const res2 = await fetch(`http://library.lol/main/${book.md5}`)
        const html = await res2.text()
        
        const $ = cheerio.load(html)
        
        console.log(book)

        const bookURL = $('#download h2 a').attr('href')
        const bookCover = $('img').attr('src')


        if(!bookURL) {
            console.log("cannot get url of book from: ")
            console.log(html)
        }

        const result = {
            id: parseInt(book.id),
            title: book.title,
            author: book.author,
            url: bookURL,
            cover: bookCover,
            author: book.author,
            publisher: book.publisher,
            pages_count: parseInt(book.pages),
            edition: parseInt(book.edition) || 0,
            extension: book.extension,
            language: book.language,
            year: book.year,
            topicsId: parseInt(book.topic),
            filesize: parseInt(book.filesize)
        }
        return result
    }))
    // console.dir(result)

    
    if(!to) return result[0]
    return result
} 
