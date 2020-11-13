// Importamos Express
import express from 'express';

export default function createServer(){
    // Crea un servidor
    const app = express();

    // Creamos un EndPoint de 'Route parameters'
    app.get('/resultados/:equipo1/:equipo2', (req, res) => {
        res.send(`Resultados del ${req.params.equipo1} vs ${req.params.equipo2}`)
    });

    // Devuelve un servidor
    return app;
}