const express = require('express');
const router = express.Router();

const sensorController = require('../controllers/sensorController');

router.post('/sensor', sensorController.create);
router.get('/sensor', sensorController.findAll);
router.get('/sensor/average', sensorController.average);
router.get('/sensor/max', sensorController.max);
router.get('/sensor/min', sensorController.min);

module.exports = router;