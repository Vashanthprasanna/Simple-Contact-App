const express = require("express");
const Routers = require("./routes/contRoutes");
const mongoose = require("mongoose");
const app = express();

const dbURI =
  "mongodb+srv://vashanth:vashanth1218@node-test.exgub.mongodb.net/vashanth?retryWrites=true&w=majority&appName=node-test";

mongoose
  .connect(dbURI)
  .then(() => app.listen(3000))
  .then(() => console.log("DB Connected..."))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/", Routers);
