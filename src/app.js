const express = require('express');
const cors = require('cors');          
const config = require('./config');
const apiRoutes = require('./routes/api');
const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});             
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('port', config.app.port);


app.use('/api', apiRoutes);

module.exports = app;