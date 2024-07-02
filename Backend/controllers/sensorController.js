const Sensor = require('../models/sensorModel');
const { DateTime } = require('luxon');
const Sequelize = require('sequelize');
const thisDay = DateTime.now().setZone('Asia/Jakarta').toFormat('yyyy-MM-dd');

exports.create = (req, res) => {
    const datetime = DateTime.now().setZone('Asia/Jakarta').toFormat('yyyy-MM-dd HH:mm:ss');

    const sensor = {
        datetime: datetime,
        ampere: req.body.ampere,
        volt: req.body.volt,
    };

    Sensor.create(sensor)
        .then((data) => {
            // broadcast data to all connected clients
            // Emit event ke semua klien
            global.io.emit('new-sensor-data', data);

            res.status(200).json({
                message: 'Sensor data created successfully',
                data,
            });
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'Some error occurred while creating the sensor data',
            });
        });
};

exports.findAll = (req, res) => {
    // check req length
    const limit = req.query.limit || 100;
    const offset = req.query.offset || 0;
    const date = req.query.date || thisDay;

    // Membuat objek Date untuk awal dan akhir hari
    const startDate = new Date(`${date}T00:00:00.000Z`); // Awal hari dalam UTC
    const endDate = new Date(`${date}T23:59:59.999Z`); // Akhir hari dalam UTC

    Sensor.findAll({ 
        where: {
            datetime: {
                [Sequelize.Op.between]: [startDate, endDate],
            }
        },
        limit: limit,
        offset: offset,
        order: [['datetime', 'DESC']],
    })

        .then((data) => {
            res.status(200).json({
                message: 'Sensor data retrieved successfully',
                data,
            });
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'Some error occurred while retrieving sensor data',
            });
        });
};

// average ampere and volt
exports.average = (req, res) => {
    // check req date
    const date = req.query.date || thisDay;

    // Membuat objek Date untuk awal dan akhir hari
    const startDate = new Date(`${date}T00:00:00.000Z`); // Awal hari dalam UTC
    const endDate = new Date(`${date}T23:59:59.999Z`); // Akhir hari dalam UTC

    Sensor.findAll({
        attributes: [
            [Sequelize.fn('AVG', Sequelize.col('ampere')), 'ampere'],
            [Sequelize.fn('AVG', Sequelize.col('volt')), 'volt'],
        ],
        whereDate: {
            datetime: {
                [Sequelize.Op.between]: [startDate, endDate],
            }
        },
    })
        .then((data) => {
            res.status(200).json({
                'message': 'Sensor data retrieved successfully',
                'average': data,
            });
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'Some error occurred while retrieving sensor data',
            });
        });
};

// max ampere and volt
exports.max = (req, res) => {
    // check req date
    const date = req.query.date || thisDay;
    
    // Membuat objek Date untuk awal dan akhir hari
    const startDate = new Date(`${date}T00:00:00.000Z`); // Awal hari dalam UTC
    const endDate = new Date(`${date}T23:59:59.999Z`); // Akhir hari dalam UTC

    Sensor.max('ampere', {
        whereDate: {
            datetime: {
                [Sequelize.Op.between]: [startDate, endDate],
            }
        },
    })
        .then((ampere) => {
            Sensor.max('volt', {
                whereDate: {
                    datetime: date,
                },
            })
                .then((volt) => {
                    res.status(200).json({
                        'message': 'Sensor data retrieved successfully',
                        'ampere': ampere,
                        'volt': volt,
                    });
                })
                .catch((error) => {
                    res.status(500).send({
                        message: error.message || 'Some error occurred while retrieving sensor data',
                    });
                });
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'Some error occurred while retrieving sensor data',
            });
        });
};

// min ampere and volt
exports.min = (req, res) => {
    // check req date
    const date = req.query.date || thisDay;

    // Membuat objek Date untuk awal dan akhir hari
    const startDate = new Date(`${date}T00:00:00.000Z`); // Awal hari dalam UTC
    const endDate = new Date(`${date}T23:59:59.999Z`); // Akhir hari dalam UTC

    Sensor.min('ampere', {
        whereDate: {
            datetime: {
                [Sequelize.Op.between]: [startDate, endDate],
            }
        },
    })
        .then((ampere) => {
            Sensor.min('volt', {
                whereDate: {
                    datetime: date,
                },
            })
                .then((volt) => {
                    res.status(200).json({
                        'message': 'Sensor data retrieved successfully',
                        'ampere': ampere,
                        'volt': volt,
                    });
                })
                .catch((error) => {
                    res.status(500).send({
                        message: error.message || 'Some error occurred while retrieving sensor data',
                    });
                });
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'Some error occurred while retrieving sensor data',
            });
        });
};

