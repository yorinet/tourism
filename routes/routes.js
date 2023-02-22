const express = require('express');
const router = express.Router();
const  clientController = require('../controllers/clients.controller');

router.get('/client', clientController.getAll);
router.post('/client', clientController.create);
router.get('/client/:id', clientController.getById);
router.put('/client/:id', clientController.update);
router.delete('/client/:id', clientController.delete);

module.exports = router;
