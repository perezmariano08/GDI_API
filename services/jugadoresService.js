const db = require('../utils/db');

const getJugadores = async () => {
    const [jugadores] = await db.query('SELECT * FROM jugadores');
    return jugadores;
};

const getJugador = async (id) => {
    const [jugador] = await db.query('SELECT * FROM jugadores WHERE id_jugador = ?', [id]);
    return jugador.length > 0 ? jugador[0] : null;
};

module.exports = {
    getJugadores,
    getJugador,
};
