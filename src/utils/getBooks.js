import fetch from 'node-fetch'
import cheerio from 'cheerio'

export async function getLinks(md5) {
    console.log("getting download link: " + md5)        
    const res = await fetch(`http://library.lol/main/${book.md5}`)
    const html = await res.text()
    
    const $ = cheerio.load(html)
    
    const url = $('#download h2 a').attr('href')
    const cover = $('img').attr('src')

    if(!url) {
        console.log("cannot get url of book: ", html)
    }

    return {url, cover}
}

export default async function getBookInfo(ids) {

    if(!Array.isArray(ids) || typeof ids !== 'number' || typeof Number(ids) !== 'number') {
        return null
    }
    let ids_str = ids.join()
        

    const res1 = await fetch(`https://libgen.is/json.php?ids=${ids_str}&fields=*`);
    const books = await res1.json()

    const result = await Promise.all(books.map(async book => {

        const {url, cover} = await getLinks(book.md5);
        
        const result = {
            id: parseInt(book.id),
            title: book.title,
            author: book.author,
            url: url,
            cover: cover,
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
    
    if(ids.length === 1) return result[0]
    return result
} 
