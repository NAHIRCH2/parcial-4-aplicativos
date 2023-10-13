"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidationErrors = void 0;
const express_validator_1 = require("express-validator");
const http_exception_1 = require("../utils/http.exception");
const logger_1 = __importDefault(require("../utils/logger")); // Corregido la ruta del módulo logger
const handleValidationErrors = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) { // Corregido el operador ! en lugar de |
        const errorMessage = errors.array().map((err) => err.msg).join(', '); // Corregido err-msg a err.msg
        logger_1.default.error(`Error de validación: ${errorMessage}`); // Usar comillas invertidas para interpolación de cadenas
        next(new http_exception_1.BadRequestException(errorMessage)); // Lanzar una excepción BadRequestException
    }
    else {
        next(); // Si no hay errores de validación, continuar con la siguiente función middleware
    }
};
exports.handleValidationErrors = handleValidationErrors;
