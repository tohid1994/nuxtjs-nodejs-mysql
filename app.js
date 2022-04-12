const createError = require("http-errors");
const express = require("express");
const app = express();
const logger = require("morgan");
const path = require('path');
const db = require('./app/configs/db')
const mainRoutes = require('./app/routes/mainRoutes')

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
require("dotenv").config();
app.use(mainRoutes)

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
