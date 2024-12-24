const express = require('express');
const router = express.Router();
const jugadoresController = require('../controllers/jugadoresController');
const partidosController = require('../controllers/partidosController');
const equiposController = require('../controllers/equiposController');

// Esta es la ruta correcta según tu código
router.get('/jugadores/:id?', jugadoresController.getJugadores);

// PArtidos
router.get('/get-partidos', partidosController.getPartidos);

// Equipos
router.get('/get-equipos', equiposController.getEquipos);

module.exports = router;
