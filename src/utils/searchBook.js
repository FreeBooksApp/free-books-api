import getBooks from "./getBooks.js";

export async function searchBook(query) {
    console.log(`\nsearch book: \t "${query}"\n`)

    return await fetch('https://libgen.is/search.php?req=' + request).then(res => res.text()).then(html => {

        let ids = []
        
        // TODO: get ids with cheerio


        return getBooks(ids)
    })

}