"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController = __importStar(require("../controllers/product.controller"));
const admin_1 = require("../middlewares/admin");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const product_Validators_1 = require("../middlewares/validators/product.Validators");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const router = (0, express_1.Router)();
// OBTENER TODOS
router.get("/", userController.index);
// CREAR
router.post("/", auth_middleware_1.authMiddleware, admin_1.admin, ...product_Validators_1.productValidators, validation_middleware_1.handleValidationErrors, userController.create);
// OBTENER UNO
router.get("/:id", product_Validators_1.mongoIdValidator, validation_middleware_1.handleValidationErrors, userController.show);
// BORRAR
router.delete("/:id", auth_middleware_1.authMiddleware, admin_1.admin, product_Validators_1.mongoIdValidator, validation_middleware_1.handleValidationErrors, userController.destroy);
exports.default = router;
