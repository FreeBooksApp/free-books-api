const publishers = require('../data/publishers.json')
const getPublisherObject = require('../responses/publisherObject')


exports.getPublishers = () => {
    return publishers.map(getPublisherObject)
}

exports.getPublisher = (id) => {
    return getPublisherObject(publishers.find(publisher => publisher.id === id))
}