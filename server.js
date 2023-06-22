import express from "express";
import bodyParser from "body-parser";
import booksRouter from './routes/books.js'
const app = express();
const PORT = 7005;

app.use(bodyParser.json());

app.use('/books',booksRouter)

app.get("/", (req, res) => res.send("Hello from Homepage"));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
