import { Schema, model } from 'mongoose';

interface WheaterInfo {
    Codigo:  string, 
    Estacion:  string, 
    HoraUpdate:  string, 
    Temp:  string, 
    Humedad:  string, 
    Estado:  string, 
    Icono:  string
}

const wheaterInfoSchema = new Schema<WheaterInfo>({
    Codigo: {type: String, required: true},
    Estacion: {type: String, required: true},
    HoraUpdate: {type: String, required: true},
    Temp: {type: String, required: true},
    Humedad: {type: String, required: true},
    Estado: {type: String, required: true},
    Icono: {type: String, required: true}
})

export const wheaterInfoModel = model<WheaterInfo>('WheaterInfo', wheaterInfoSchema);

