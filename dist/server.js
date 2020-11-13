"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importamos Express
var express_1 = __importDefault(require("express"));
function createServer() {
    // Crea un servidor
    var app = express_1.default();
    // Creamos un EndPoint de 'Route parameters'
    app.get('/resultados/:equipo1/:equipo2', function (req, res) {
        res.send("Resultados del " + req.params.equipo1 + " vs " + req.params.equipo2);
    });
    // Devuelve un servidor
    return app;
}
exports.default = createServer;
