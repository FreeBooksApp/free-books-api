# free-books-api
Backend Api for [FreeBooks](https://freebooks.vercel.app)

using this api you can access to all data which is used for FreeBooks app.

# Link
the server is hosted on Heroku.

https://freebooks-api.herokuapp.com


# Usage

valid endpoints are: 

get all books uses take and skip query parameters for pagination

https://freebooks-api.herokuapp.com/books



get single book

https://freebooks-api.herokuapp.com/books/:id


get list of all topics (more than 300 rows)

https://freebooks-api.herokuapp.com/topics/


search book by title

https://freebooks-api.herokuapp.com/search/title/:bookTitle


search book by author name

https://freebooks-api.herokuapp.com/search/author/:name


search book by publisher name

https://freebooks-api.herokuapp.com/search/publisher/:name


search book by topic

https://freebooks-api.herokuapp.com/search/topic/:name


## Examples

### get Books
default values for skip is 0 and for take is 20

```js
    fetch('https://freebooks-api.herokuapp.com/books?skip=200&take=10')
        .then(res => res.json())
        .then(books => {
            console.log(books)
            /*

                returns array of books with id of 201 to 210;

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


```prisma
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