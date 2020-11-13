// Importamos la función que crea el servidor de 'server.ts'
import createServer from './server'

// Invocamos la función para que cree el servido y añada el endpoint creado
// En el callback de la función metemos un mensaje que se pintará
// cuando el servidor se levante y ya estemos escuchando
createServer().listen(3000, () => {
    console.log('El servidor ya está levantado y estamos escuchando...');
});