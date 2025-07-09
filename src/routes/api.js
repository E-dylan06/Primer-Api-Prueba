const express = require('express');
const productos = require('../modules/product/product-controller');
const clientes  = require('../modules/client/client-controller');
const tareas = require('../modules/tareas/tarea-controller');

const router = express.Router();


router.use('/productos', productos);
router.use('/clientes', clientes);
router.use('/tareas', tareas);


module.exports = router;