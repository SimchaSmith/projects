const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const usersRouter = require("./routers/usersR");
const authRouter = require("./routers/authR");
const cardsRouter = require("./routers/cardsR");

mongoose
  .connect("mongodb://127.0.0.1/testdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to mongoDB..."))
  .catch((err) => console.error("Could not connect to mongoDB...", err));

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/cards", cardsRouter);

const PORT = 3002;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
