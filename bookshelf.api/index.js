var express = require('express'); 
var cors = require('cors');

var app = express();
app.use(express.json());
app.use(cors({origin: true, credentials: true}));

// Create a NodeJs Api - REST API

// CRUD operations

// Create - POST
app.post('/books', function (req, res) {
    var book = req.body;
    book.id = books.length + 1; 
    books.push(book);

    res.send(book);
});  // test this later in the UI

// Read - GET
app.get('/books', function (req, res) {
    return res.json(books); // res = response
});

app.get('/books/:id', function (req, res) { // req = request
    var foundBook = books.find(book => book.id == req.params.id);
    return res.json([ foundBook ]);
});

// Update - PUT

// Delete - DELETE


const books = // array of book objects
[
    {
        id: 1,
        title: "Name of the Wind",
        author: "I don't remember"
    },
    {
        id: 2,
        title: "Mistbourne",
        author: "Brandon Sanderson"
    },
    {
        id: 3,
        title: "A Good Book",
        author: "Nick Johnson"
    },
    {
        id: 4,
        title: "A Good Book",
        author: "Nick Johnson"
    }
];


const server = app.listen(8080, function () {
    console.log("Api started and listening on port 8080");
});