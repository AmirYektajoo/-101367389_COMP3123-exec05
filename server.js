const express = require("express");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(express.json());
app.use("/api/books", require("./routes/getBooks"));
const port = 3000;

app.listen(port, () => console.log("started"));
