const express = require('express')

const app = express()

const bookRoutes = require('./routes/books');


app.use('/books', bookRoutes);

app.get('/ping', (req, res) => {

	return res.send('pong');

})

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`server is running on port ${port}`));
;;;;;;;;;;;;;;;;;;;;;;;;;