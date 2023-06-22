import express from "express";
import { createBook,getBooks,getBook, deleteBook, updateBook } from "../controllers/books.js";
const router = express.Router();


//  all routes in here are starting with /books
// get all books
router.get("/",getBooks);

// add a new book
router.post("/", createBook);

// get a specific book
router.get("/:id",getBook);

// delete book 
router.delete("/:id", deleteBook);

// update book infomation
// we can use put method to update but it almost like overwriting a method
router.patch("/:id", updateBook);
export default router;
