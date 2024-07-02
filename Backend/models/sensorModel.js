const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Sensor = sequelize.define('sensor', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    datetime : {
        type: Sequelize.DATE,
        allowNull: false,
    },
    ampere: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    volt: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
}, {
    timestamps: false,
    tableName: 'sensor'  // Menentukan nama tabel secara statis
  }
);

module.exports = Sensor;