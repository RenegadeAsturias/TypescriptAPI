"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var database_1 = require("./database");
function createServer() {
    // Crea un servidor
    var app = express_1.default();
    // Creamos un EndPoint de 'Route parameters'
    app.get('/resultados/:equipo1/:equipo2', function (req, res) {
        try {
            var team1 = database_1.getClub(req.params.equipo1).name;
            var team2 = database_1.getClub(req.params.equipo2).name;
            var resultado = database_1.getResultado(team1, team2);
            if (resultado.score) {
                res.json({
                    fecha: resultado.date,
                    resultado: "Resultado: " + team1 + " " + resultado.score.ft[0] + " - " + resultado.score.ft[1] + " " + team2
                });
            }
            else {
                res.json({
                    fecha: resultado.date,
                });
            }
        }
        catch (e) {
            res.status(400).json({
                error: e.message
            });
        }
        res.send("Resultados del " + req.params.equipo1 + " vs " + req.params.equipo2);
    });
    // Devuelve un servidor
    return app;
}
exports.default = createServer;
