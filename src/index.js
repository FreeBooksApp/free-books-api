const express = require('express')

const app = express()

const bookRoutes = require('./routes/books');
const authorRoutes = require('./routes/authors');
const publisherRoutes = require('./routes/publishers');


app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);
app.use('/publishers', publisherRoutes);

app.get('/ping', (req, res) => {

	return res.send('pong');

})

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`server is running on port ${port}`));