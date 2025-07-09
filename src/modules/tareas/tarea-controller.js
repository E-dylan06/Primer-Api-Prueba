const express = require('express');
const respuesta = require('../../responses/responses');
const service = require('./tarea-service');


const router = express.Router();

router.get('/', async function(req, res){
 try{
   const items =  await service.list();
   respuesta.success(req, res,items, 200);
 }catch(err){
  respuesta.error(req,res,err,500);
 }

});


router.get('/:id', async function(req, res){
   try{
      const items =  await service.selectById(req.params.id);
      respuesta.success(req, res,items, 200);
   }catch(err){
      respuesta.error(req,res,err,500);
   }
  
  });
  
  router.post('/', async function(req, res){
   try{
      console.log('Datos recibidos:', req.body); 
      const items =  await service.add(req.body);
      const mensaje = "Guardado con exito";
      respuesta.success(req, res,mensaje, 200);
   }catch(err){
      console.error('Error al insertar datos:', err);
      respuesta.error(req,res,err.body,500);
   }
  
  });
  
  module.exports = router;