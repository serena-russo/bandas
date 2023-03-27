let express = require ('express');
let router = express.Router(); 
let bandasController = require('../controllers/bandasControllers');

//rutas de bandas 
router.get('/', bandasController.index);
router.get('/id/:id' , bandasController.showId );
router.get('/genero/:genero' , bandasController.genre);


module.exports = router;