"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wheaterInfoModel = void 0;
const mongoose_1 = require("mongoose");
const wheaterInfoSchema = new mongoose_1.Schema({
    Codigo: { type: String, required: true },
    Estacion: { type: String, required: true },
    HoraUpdate: { type: String, required: true },
    Temp: { type: String, required: true },
    Humedad: { type: String, required: true },
    Estado: { type: String, required: true },
    Icono: { type: String, required: true }
});
exports.wheaterInfoModel = (0, mongoose_1.model)('WheaterInfo', wheaterInfoSchema);
