const express = require("express");
const { getUserBooks, createBooks } = require("../controlers/booksControler");
const router = express.Router();
router.get("/", getUserBooks);
router.post("/create", createBooks);

module.exports = router;
