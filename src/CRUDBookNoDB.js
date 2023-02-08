require("dotenv").config();
const express = require('express');
const app = express();

app.use(express.json());

let books =[
    {
        id:1,
        title:'Book 1',
        author: 'Author 1'
    },
    {
        id:2,
        title:'Book 2',
        author: 'Author 2'
    },
    {
        id:3,
        title:'Book 3',
        author: 'Author 3'
    }
];

app.get('/books',(req, res) => {
    res.json(books);
});

app.get('/books/:id',(req, res) => {
    const book = book.find(b => b.id === parseInt(req.params.id));
    if (!book) res.status(404).send('Book not fount');
    res.json(book);
});

app.post('/books', (req ,res) =>{
    const book ={
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    book.push(book);
    res.send(book);
});

app.put('/books/:id',(req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) res.status(404).send('Bool not fount');
    book.title = req.body.title
    book.author = req.body.title
    res.send(book);
});

app.delete('/books/:id',(req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) res.status(404).send('Bool not fount');
    const index = book.index.indexOf(book);
    books.splice(index,1);
    res.send(book);
});

const port = process.env.POST || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));