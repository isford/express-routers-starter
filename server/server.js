const express = require('express');
const bodyParser = require('body-parser');
const bookRouter = require('./routes/book.router');
const movieRouter = require('./routes/movie.router');

const app = express();
const PORT = process.env.PORT || 5000;
// const bookList = []; MOVED
// const movieList = [];

// express static file serving - public is the folder name
app.use( express.static('server/public') );

// Setup body parser for POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Start server listening on PORT
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}...`);
})

// TODO - Move these routes to their own modules!

//MOVED TO BOOK.ROUTER
// app.get('/book', (req, res) => {
//     res.send(bookList);
// });

// app.post('/book', (req, res) => {
//     bookList.push(req.body);
//     res.sendStatus(200);
// });
app.use('/book',bookRouter);



// app.get('/movie', (req, res) => {
//   res.send(movieList);
// });

// app.post('/movie', (req, res) => {
//   movieList.push(req.body);
//   res.sendStatus(200);
// });
app.use('/movie', movieRouter)
