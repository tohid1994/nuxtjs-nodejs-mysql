const createError = require("http-errors");
const express = require("express");
const app = express();
const logger = require("morgan");
const path = require('path');
<<<<<<< HEAD
const db = require('./app/configs/db')

=======
>>>>>>> parent of 885bc88... create mysql conection

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
require("dotenv").config();

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
