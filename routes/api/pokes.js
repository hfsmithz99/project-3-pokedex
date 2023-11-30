const express = require('express');
const router = express.Router();
const pokeCtrl = require('../../controllers/poke');

const multer = require('multer');
const upload = multer();

router.post('/', upload.single('photo'), pokeCtrl.create)
router.get('/', pokeCtrl.index)
router.delete('/:id', pokeCtrl.deletePoke)

module.exports = router;