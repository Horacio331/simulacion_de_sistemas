var contador = 0;

function cellclick(celda) {
    if (celda.textContent === "") {
        if (contador < 8) {
            celda.textContent = "♛";
            ++contador;
            document.getElementById("pcontador").innerHTML = `Reinas Colocadas: ${contador}`;
            bloquear(celda);
            if (contador == 8) {
                document.getElementById("pganador").innerHTML = "¡Felicidades! Has colocado todas las reinas.";
            }
        }
    } else {
        celda.textContent = "";
        contador--;
        document.getElementById("pcontador").innerHTML = `Reinas Colocadas: ${contador}`;
        document.getElementById("pganador").innerHTML = "";
        reiniciarBloqueo(celda);
    }
}

function cambiar(r, c) {
    var tablero = document.getElementById("tablero");
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (i === r || j === c || Math.abs(i - r) === Math.abs(j - c)) {
                tablero.rows[i].cells[j].style.backgroundColor = "#ff00008b";
            }
        }
    }
}

function reinicio() {
    var celdas = document.getElementsByTagName("td");
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].style.backgroundColor = "";
    }
}

function bloquear(celda) {
    const row = celda.parentNode.rowIndex;
    const col = celda.cellIndex;
    const tablero = document.getElementById("tablero");

    // horizontal y vertical
    for (let i = 0; i < 8; i++) {
        if (i !== col) tablero.rows[row].cells[i].onclick = null;
        if (i !== row) tablero.rows[i].cells[col].onclick = null;
    }

    // diagonales
    for (let i = -7; i <= 7; i++) {
        if (row + i >= 0 && row + i < 8 && col + i >= 0 && col + i < 8 && i !== 0) {
            tablero.rows[row + i].cells[col + i].onclick = null;
        }
        if (row + i >= 0 && row + i < 8 && col - i >= 0 && col - i < 8 && i !== 0) {
            tablero.rows[row + i].cells[col - i].onclick = null;
        }
    }
}

function reiniciarBloqueo(celda) {
    const row = celda.parentNode.rowIndex;
    const col = celda.cellIndex;
    const tablero = document.getElementById("tablero");

    for (let i = 0; i < 8; i++) {
        tablero.rows[row].cells[i].onclick = function () { cellclick(this); };
        tablero.rows[i].cells[col].onclick = function () { cellclick(this); };
    }

    for (let i = -7; i <= 7; i++) {
        if (row + i >= 0 && row + i < 8 && col + i >= 0 && col + i < 8 && i !== 0) {
            tablero.rows[row + i].cells[col + i].onclick = function () { cellclick(this); };
        }
        if (row + i >= 0 && row + i < 8 && col - i >= 0 && col - i < 8 && i !== 0) {
            tablero.rows[row + i].cells[col - i].onclick = function () { cellclick(this); };
        }
    }
}
