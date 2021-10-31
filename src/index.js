import express from 'express'

const app = express()

import bookRoutes from './routes/books.js';
import searchRoutes from './routes/search.js';
import topicsRoutes from './routes/topics.js';

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/search', searchRoutes);
app.get('/topics', topicsRoutes);
app.use('/books', bookRoutes);
app.get('/ping', (req, res) => {

	return res.send('pong');

})

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`server is running on port ${port}`));
