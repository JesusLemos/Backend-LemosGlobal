var express = require('express');
var router = express.Router();

//controladores
const crearPost = require('../controller/crearPost_controller');
const leerPost = require('../controller/leerPost_controller');


router.get('/leer/:id', leerPost);
router. post('/crear', crearPost);

module.exports = router;