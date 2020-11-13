"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importamos la función que crea el servidor de 'server.ts'
var server_1 = __importDefault(require("./server"));
// Invocamos la función para que cree el servido y añada el endpoint creado
// En el callback de la función metemos un mensaje que se pintará
// cuando el servidor se levante y ya estemos escuchando
server_1.default().listen(3000, function () {
    console.log('El servidor ya está levantado y estamos escuchando...');
});
