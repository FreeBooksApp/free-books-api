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
    /search?name=<book or author name> -> returns list of matching books or authors
    /ping -> to test everything works (must return pong)


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
    cover: string(URL),
    pages_count: integer,
    download_count: integer,
    author: Author{...},
    publisher: Publisher{...},
    categories: [stirng, string, ...],
    published_at: stirng(Date),
    registered_at: string(Date),
}
```

### Author
```
{
    id: integer(id),
    name: string,
    profile: string(URL),
    about: string,
    contact: string(URL),
    books: [Book{...}, Book{...}, ...]
}
```

### Publisher
```
{
    id: integer(id),
    name: string,
    homepage: string(URL),
    origin: string,
    logo: string(URL),
    registered_at: string(Date)
}
```