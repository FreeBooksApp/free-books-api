module.exports = function getPublisherObject(publisher) {
    if(!publisher) return null

    return {
        id: publisher.id,
        name: publisher.name,
        homepage: publisher.homepage,
        origin: publisher.origin,
        logo: publisher.logo,
        registered_at: publisher.registered_at
    }
}