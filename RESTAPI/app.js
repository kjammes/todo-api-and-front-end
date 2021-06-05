const express = require('express');

const indexRouter = require('./routes/index');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5000");
  // res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
  next();
});

app.use(indexRouter);

app.listen(3000);