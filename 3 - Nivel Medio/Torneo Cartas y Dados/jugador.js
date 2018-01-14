/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2017 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

class Jugador {
    constructor(name) {
        this.name = name;
        this.resultados = [];
    }

    get nombre() {
        return this.name;
    }

    set puntuacion(puntos) {
        this.resultados.push(puntos);
    }

    get mejorPuntuacion() {
        return (Math.max(...this.resultados));
    }

    get totalPuntos() {
        var puntos = 0;
        for (let p of this.resultados) {
            puntos += p;
        }
        return puntos;
    }

    get algunCero() {
        var cero;
        if (this.resultados.find(0)) {
            cero = 'Si';
        } else {
            cero = 'No';
        }
        return cero;
    }

    get puntuacionMedia() {
        return (this.totalPuntos / this.resultados.length);
    }
}
