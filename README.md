# free-books-api
Backend Api for [FreeBooks](https://freebooks.vercel.app)

using this api you can access to all data which is used for FreeBooks app.

# Link
the server is hosted on Heroku.

https://freebooks-api.herokuapp.com


# Usage

you can send HTTP request to these routes

```
    /books -> returns list of available books
    /books/:id -> return info about single book
    /authors -> returns list of book writers
    /authors/:id -> information about single author including list of his/her books
    /publishers -> returns list of book publishers
    /publishers/:id -> information about single publisher including list of the published books

    /ping -> to test everything works (must return pong)

    *Not implemented below yet
    /search?name=<book or author name> -> returns list of matching books or authors


```

## Examples

### get Books
```js
    fetch('https://freebooks-api.herokuapp.com/books')
        .then(res => res.json())
        .then(books => {
            console.log(books)
            /*
                [
                    Book {...},
                    Book {...},
                    ...
                ]   
            */
            
        })

```

### get single book
```js
    fetch('https://freebooks-api.herokuapp.com/books/2')
        .then(res=> res.json())
        .then(book => {
            console.log(book)
            /*
                Book {
                    id: 2,
                    title: ...,
                    ...
                    ...
                }

            */
        })
```

## Objects
Here is list of objects that you will get as response.

### Book
Book object contains full information about book, author and it's publisher
```
{
    id: integer(id),
    title: string,
    url: string(URL),
    cover: string(URL) | null,
    author_id: integer(id),
    publisher_id: integer(id),
    published_at: stirng(Date) | null,
    registered_at: string(Date),
    pages_count: integer,
    author: Author{...},
    publisher: Publisher{...},
    // download_count: integer,
    // tags: [stirng, string, ...],
}
```

### Author
```
{
    id: integer(id),
    name: string,
    profile: string(URL) | null,
    about: string | null,
    contact: string(URL) | null,
    registered_at: string(Date)
    books: [Book{...}, Book{...}, ...]
}
```

### Publisher
```
{
    id: integer(id),
    name: string,
    homepage: string(URL) | null,
    origin: string | null,
    logo: string(URL) | null,
    registered_at: string(Date)
}
```