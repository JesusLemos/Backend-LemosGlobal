var express = require('express');
var router = express.Router();

//controladores
const crearPost = require('../controller/crearPost_controller');

router.get('/prueba', crearPost);

module.exports = router;