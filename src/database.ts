import { match } from "assert";
import { Club, Clubs, Match, Matches } from "./types";

const clubs: Clubs = require("../data/clubs.json")
const resultados: Matches = require("../data/resultados.json")

export function getClub (code: string): Club {
    const club = clubs.clubs.find(club => club.code === code);
    if(!club){
        throw new Error("No existe el Club");
    }
    return club;
}

export function getResultado(equipo1:string, equipo2:string): Match{
    const match = resultados.matches.find(match => {
        return equipo1===match.team1 && equipo2===match.team2;
    })
    if(!match){
        throw new Error("No existe este partido este año");
    }
    return match;
}