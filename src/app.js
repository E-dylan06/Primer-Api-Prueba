const express = require('express');
const cors = require('cors');          
const config = require('./config');
const clientes = require('./modules/client/client-controller');
const productos = require('./modules/product/product-controller');
const app = express();
app.use(cors({
  origin: '*'   
}));               
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('port', config.app.port);
app.use('/api/clientes', clientes);
app.use('/api/productos', productos);

module.exports = app;