"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResultado = exports.getClub = void 0;
var clubs = require("../data/clubs.json");
var resultados = require("../data/resultados.json");
function getClub(code) {
    var club = clubs.clubs.find(function (club) { return club.code === code; });
    if (!club) {
        throw new Error("No existe el Club");
    }
    return club;
}
exports.getClub = getClub;
function getResultado(equipo1, equipo2) {
    var match = resultados.matches.find(function (match) {
        return equipo1 === match.team1 && equipo2 === match.team2;
    });
    if (!match) {
        throw new Error("No existe este partido este año");
    }
    return match;
}
exports.getResultado = getResultado;
