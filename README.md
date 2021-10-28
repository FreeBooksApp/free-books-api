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

                returns array of books;

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
                return object of single book
                
                Book {
                    id: 2,
                    title: ...,
                    ...
                    ...
                }

            */
        })
```


### Response

Book object contains full information about the book.


```
model Books {
  id            Int      @id @default(autoincrement())
  title         String
  url           String
  language      String
  cover         String?
  year          String?
  edition       Int?
  filesize      Int
  extension     String
  registered_at DateTime @default(now())
  pages_count   Int?
  author        String?
  publisher     String?
  topic         Topics?  @relation(fields: [topicsId], references: [id])
  topicsId      Int?
}

model Topics {
  name  String
  id    Int     @unique
  Books Books[]
}

```