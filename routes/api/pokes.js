const express = require('express');
const router = express.Router();
const pokeCtrl = require('../../controllers/poke');

const multer = require('multer');
const upload = multer();

router.post('/', upload.single('photo'), pokeCtrl.create)


module.exports = router;