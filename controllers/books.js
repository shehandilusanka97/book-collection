let books = [
  {
    id: "1",
    title: "Madolduwa",
    author: "Martin Wickramasinge",
    publishYear: 2015,
  },
  {
    id: "2",
    title: "Uthum Pethum",
    author: "Sujeewa Presannaarachichi",
    publishYear: 2017,
  },
];

// add a new book
export const createBook = (req, res) => {
  const book = req.body;
  books.push(book);
  res.send(`Book with the title ${book.title} added to the Database`);
};

// get all books
export const getBooks = (req, res) => {
  res.send(books);
};

// get a specific book
export const getBook = (req, res) => {
  const { id } = req.params;
  const foundBook = books.find((book) => book.id === id);
  res.send(foundBook);
};

// delete book 
export const deleteBook = (req, res) => {
  const { id } = req.params;
  
  books = books.filter((book) => book.id !== id);
  res.send(`Book with the id ${id} deleted from the Database`);
};

// update book infomation
export const updateBook = (req, res) => {
  const { id } = req.params;
  const { title, author, publishYear } = req.body;
  const book = books.find((book) => book.id === id);

  if (title) book.title = title;
  if (author) book.author = author;
  if (publishYear) book.publishYear = publishYear;
  res.send(`User with the id ${id} has been updated`);
};
