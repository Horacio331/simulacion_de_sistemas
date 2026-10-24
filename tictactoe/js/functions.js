// Rutas de las imágenes. Cambia estos dos nombres por los de tus archivos.
const IMAGEN_UNO = "img/X.png";
const IMAGEN_DOS = "img/O.png";

let turnoUno = true;
let jugadas = 0;
let partidaTerminada = false;

function mostrarMensaje(texto) {
    document.getElementById("mensaje").textContent = texto;
}

function ponerFicha(casilla) {
    // Si la partida ya acabó o la casilla está ocupada, no hace nada
    if (partidaTerminada || casilla.dataset.ficha) {
        return;
    }

    if (turnoUno) {
        casilla.style.backgroundImage = "url('" + IMAGEN_UNO + "')";
        casilla.dataset.ficha = "uno";
    } else {
        casilla.style.backgroundImage = "url('" + IMAGEN_DOS + "')";
        casilla.dataset.ficha = "dos";
    }

    turnoUno = !turnoUno;
    jugadas++;

    revisarGanador();

    if (!partidaTerminada) {
        if (jugadas === 9) {
            partidaTerminada = true;
            mostrarMensaje("Empate, nadie gana");
            bloquearTablero();
        } else {
            mostrarMensaje(turnoUno ? "Turno del jugador 1" : "Turno del jugador 2");
        }
    }
}

function revisarGanador() {
    var casillas = document.querySelectorAll(".casilla");
    const estiloLinea = document.createElement("style");

    // fila de arriba
    if (
        casillas[0].dataset.ficha !== undefined &&
        casillas[0].dataset.ficha === casillas[1].dataset.ficha &&
        casillas[1].dataset.ficha === casillas[2].dataset.ficha
    ) {
        if (casillas[0].dataset.ficha === "uno") {
            mostrarMensaje("¡Ganó el jugador 1!");
        } else {
            mostrarMensaje("¡Ganó el jugador 2!");
        }

        estiloLinea.textContent = `tr:nth-child(1) td::after {
            content: "";
            position: absolute;
            left: -1px;
            right: -1px;
            top: 50%;
            height: 6px;
            background-color: #fbbf24;
            z-index: 1;
            pointer-events: none;
        }`;

        partidaTerminada = true;
        bloquearTablero();
    }

    // fila del medio
    if (
        casillas[3].dataset.ficha !== undefined &&
        casillas[3].dataset.ficha === casillas[4].dataset.ficha &&
        casillas[4].dataset.ficha === casillas[5].dataset.ficha
    ) {
        if (casillas[3].dataset.ficha === "uno") {
            mostrarMensaje("¡Ganó el jugador 1!");
        } else {
            mostrarMensaje("¡Ganó el jugador 2!");
        }

        estiloLinea.textContent = `tr:nth-child(2) td::after {
            content: "";
            position: absolute;
            left: -1px;
            right: -1px;
            top: 50%;
            height: 6px;
            background-color: #fbbf24;
            z-index: 1;
            pointer-events: none;
        }`;

        partidaTerminada = true;
        bloquearTablero();
    }

    // fila de abajo
    if (
        casillas[6].dataset.ficha !== undefined &&
        casillas[6].dataset.ficha === casillas[7].dataset.ficha &&
        casillas[7].dataset.ficha === casillas[8].dataset.ficha
    ) {
        if (casillas[6].dataset.ficha === "uno") {
            mostrarMensaje("¡Ganó el jugador 1!");
        } else {
            mostrarMensaje("¡Ganó el jugador 2!");
        }

        estiloLinea.textContent = `tr:nth-child(3) td::after {
            content: "";
            position: absolute;
            left: -1px;
            right: -1px;
            top: 50%;
            height: 6px;
            background-color: #fbbf24;
            z-index: 1;
            pointer-events: none;
        }`;

        partidaTerminada = true;
        bloquearTablero();
    }

    // columna izquierda
    if (
        casillas[0].dataset.ficha !== undefined &&
        casillas[0].dataset.ficha === casillas[3].dataset.ficha &&
        casillas[3].dataset.ficha === casillas[6].dataset.ficha
    ) {
        if (casillas[0].dataset.ficha === "uno") {
            mostrarMensaje("¡Ganó el jugador 1!");
        } else {
            mostrarMensaje("¡Ganó el jugador 2!");
        }

        estiloLinea.textContent = `td:nth-child(1)::after {
            content: "";
            position: absolute;
            top: -1px;
            bottom: -1px;
            left: 50%;
            width: 6px;
            background-color: #fbbf24;
            z-index: 1;
            pointer-events: none;
        }`;

        partidaTerminada = true;
        bloquearTablero();
    }

    // columna del centro
    if (
        casillas[1].dataset.ficha !== undefined &&
        casillas[1].dataset.ficha === casillas[4].dataset.ficha &&
        casillas[4].dataset.ficha === casillas[7].dataset.ficha
    ) {
        if (casillas[1].dataset.ficha === "uno") {
            mostrarMensaje("¡Ganó el jugador 1!");
        } else {
            mostrarMensaje("¡Ganó el jugador 2!");
        }

        estiloLinea.textContent = `td:nth-child(2)::after {
            content: "";
            position: absolute;
            top: -1px;
            bottom: -1px;
            left: 50%;
            width: 6px;
            background-color: #fbbf24;
            z-index: 1;
            pointer-events: none;
        }`;

        partidaTerminada = true;
        bloquearTablero();
    }

    // columna derecha
    if (
        casillas[2].dataset.ficha !== undefined &&
        casillas[2].dataset.ficha === casillas[5].dataset.ficha &&
        casillas[5].dataset.ficha === casillas[8].dataset.ficha
    ) {
        if (casillas[2].dataset.ficha === "uno") {
            mostrarMensaje("¡Ganó el jugador 1!");
        } else {
            mostrarMensaje("¡Ganó el jugador 2!");
        }

        estiloLinea.textContent = `td:nth-child(3)::after {
            content: "";
            position: absolute;
            top: -1px;
            bottom: -1px;
            left: 50%;
            width: 6px;
            background-color: #fbbf24;
            z-index: 1;
            pointer-events: none;
        }`;

        partidaTerminada = true;
        bloquearTablero();
    }

    // diagonal de izquierda a derecha
    if (
        casillas[0].dataset.ficha !== undefined &&
        casillas[0].dataset.ficha === casillas[4].dataset.ficha &&
        casillas[4].dataset.ficha === casillas[8].dataset.ficha
    ) {
        if (casillas[0].dataset.ficha === "uno") {
            mostrarMensaje("¡Ganó el jugador 1!");
        } else {
            mostrarMensaje("¡Ganó el jugador 2!");
        }

        estiloLinea.textContent = `table::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: calc(100% * 1.414);
            height: calc(100% * 1.414);
            border-top: 6px solid #fbbf24;
            transform: rotate(45deg);
            transform-origin: top left;
            z-index: 1;
            pointer-events: none;
        }`;

        partidaTerminada = true;
        bloquearTablero();
    }

    // diagonal de derecha a izquierda
    if (
        casillas[2].dataset.ficha !== undefined &&
        casillas[2].dataset.ficha === casillas[4].dataset.ficha &&
        casillas[4].dataset.ficha === casillas[6].dataset.ficha
    ) {
        if (casillas[2].dataset.ficha === "uno") {
            mostrarMensaje("¡Ganó el jugador 1!");
        } else {
            mostrarMensaje("¡Ganó el jugador 2!");
        }

        estiloLinea.textContent = `table::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: calc(100% * 1.414);
            height: calc(100% * 1.414);
            border-top: 6px solid #fbbf24;
            transform: rotate(-45deg);
            transform-origin: top right;
            z-index: 1;
            pointer-events: none;
        }`;

        partidaTerminada = true;
        bloquearTablero();
    }

    document.head.appendChild(estiloLinea);
}

function bloquearTablero() {
    document.querySelectorAll(".casilla").forEach(casilla => {
        casilla.disabled = true;
    });
}

function reiniciarJuego() {
    window.location.reload();
}

mostrarMensaje("Turno del jugador 1");