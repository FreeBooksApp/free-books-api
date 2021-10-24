const prisma = require('../prisma')

exports.getPublisher = (id) => {
    return prisma.publishers.findUnique({
        where: {
            id: id
        },
        include: {
            books: true
        }
    })
}

exports.getPublishers = () => {
    return prisma.publishers.findMany({
        include: {
            books: true
        }
    })
}

exports.createPublisher = (publisher) => {
    return prisma.publishers.create({
        data: publisher
    })
}

exports.updatePublisher = (id, publisher) => {
    return prisma.publishers.update({
        where: {
            id: id
        },
        data: publisher
    })
}

exports.deletePublisher = (id) => {

    // first delete all of the Publisher's books then the Publisher
    return prisma.Publishers.delete({
        where: {
            id: id
        }
    })
}