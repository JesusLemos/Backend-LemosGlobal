var express = require('express');
var router = express.Router();

//controladores

const crearUsuario = require('../controller/registroUsuario_controller');
const loginUsuario = require('../controller/loginUsuario_controller');


/* GET users listing. */
router.post('/crear', crearUsuario);
router.post('/login', loginUsuario);

module.exports = router;
