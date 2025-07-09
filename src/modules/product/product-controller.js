const express = require("express");
const respuesta = require("../../responses/responses");
const service = require("./product-service");

const router = express.Router();

router.get("/", async function (req, res) {
  try {
    const items = await service.list();
    respuesta.success(req, res, items, 200);
  } catch (err) {
    respuesta.error(req, res, err, 500);
  }
});

router.get("/:id", async function (req, res) {
  try {
    const items = await service.selectById(req.params.id);
    if (items.length === 0) {
      return respuesta.error(req, res, "Producto no encontrado", 404);
    }
    // Devuelve el objeto en lugar del array
    respuesta.success(req, res, items[0], 200);
  } catch (err) {
    respuesta.error(req, res, err, 500);
  }
});

router.post("/", async function (req, res) {
  try {
    console.log("Datos recibidos:", req.body);
    const items = await service.add(req.body);
    const mensaje = "Guardado con exito";
    respuesta.success(req, res, mensaje, 200);
  } catch (err) {
    console.error("Error al insertar datos:", err);
    respuesta.error(req, res, err.body, 500);
  }
});

module.exports = router;
