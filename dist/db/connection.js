"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('almacen', 'root', 'patopato123', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false // esta opcion quita el SELECT 1+1 AS result
});
exports.default = sequelize;
