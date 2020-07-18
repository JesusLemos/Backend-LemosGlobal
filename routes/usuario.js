var express = require('express');
var router = express.Router();

//controladores

const crearUsuario = require('../controller/registroUsuario_controller');

/* GET users listing. */
router.post('/crear', crearUsuario);

module.exports = router;
