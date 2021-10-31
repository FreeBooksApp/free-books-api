import fetch from 'node-fetch'
import cheerio from "cheerio";
import getBooks from "./getBooks.js";

export default async function searchBook(query) {
    const request = query.replace(/\s/g, '+')
    console.log(`\nsearch book: \t "${request}"\n`)

    return await fetch('https://libgen.is/search.php?req=' + request).then(res => res.text()).then(html => {

        const $ = cheerio.load(html)

        let ids = []

        $('table.c tbody').children().each(function(i, el) {
            const id = $(this).children('tr td').first().text()

            if(id !== 'ID') {
                ids.push(Number(id))
            }
        })
                
        return getBooks(ids)
    })
}