// Importamos Express
import e from 'express';
import express from 'express';
import { getClub, getResultado } from './database';

export default function createServer(){
    // Crea un servidor
    const app = express();

    // Creamos un EndPoint de 'Route parameters'
    app.get('/resultados/:equipo1/:equipo2', (req, res) => {

        try {
            let team1 = getClub(req.params.equipo1).name;
            let team2 = getClub(req.params.equipo2).name;
            let resultado = getResultado(team1, team2);
            if(resultado.score){
                res.json({
                    fecha: resultado.date,
                    resultado: `Resultado: ${team1} ${resultado.score.ft[0]} - ${resultado.score.ft[1]} ${team2}`
                })
            } else {
                res.json({
                    fecha: resultado.date,
                })
            }

        } catch (e) {
            res.status(400).json({
                error: e.message
            })
        }

        res.send(`Resultados del ${req.params.equipo1} vs ${req.params.equipo2}`)
    });

    // Devuelve un servidor
    return app;
}