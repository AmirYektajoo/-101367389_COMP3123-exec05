const books = require("../schema/books");

const getUserBooks = async (req, res) => {
  const getbooks = await books.find({});
  // const getbooks = [
  //   { name: "Romi", price: 40 },
  //   { name: "sa", price: 50 },
  // ];

  res.json(getbooks);
};
const createBooks = async (req, res) => {
  const { name, price } = req.body;
  const book = await books.create({ name, price });
  res.status(201).json({ name: book.name });
};
module.exports = {
  getUserBooks,
  createBooks,
};
