import express from 'express'

const app = express()

import bookRoutes from './routes/books.js';

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/books', bookRoutes);
app.get('/ping', (req, res) => {

	return res.send('pong');

})

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`server is running on port ${port}`));
