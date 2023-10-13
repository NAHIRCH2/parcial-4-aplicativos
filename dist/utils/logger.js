"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, timestamp, printf } = winston_1.format;
const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});
const logger = (0, winston_1.createLogger)({
    format: combine(timestamp(), myFormat),
    transports: [
        new winston_1.transports.Console(),
        new winston_1.transports.File({ filename: 'logs/app.log' }) // Esto guardará logs en un archivo llamado app.log en una carpeta 'logs'. Asegúrate de que la carpeta exista o de crearla.
    ],
});
exports.default = logger;
