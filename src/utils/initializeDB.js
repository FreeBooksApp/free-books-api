import fetch from 'node-fetch'
import cheerio from 'cheerio'
import prisma from '../prisma.js'

function addTopicsToDatabase(row) {

}

// scrape home page of libgen and get topic id and name

fetch('https://libgen.is').then(res => res.text()).then(async html => {

    const $ = cheerio.load(html)

    let topics = []

    const allTopics = await $('.col_1 li a')

    $(allTopics).each((i, topic) => {
        const href = topic.attribs['href']
        const id = href.match(/\d+/)

        topics.push({name: topic.children[0].data, id: parseInt(id[0])})
    })

    const result = await prisma.topics.createMany({data: topics})
    console.log(result)
})
