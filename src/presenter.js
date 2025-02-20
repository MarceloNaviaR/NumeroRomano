import convertirANumerosRomanos from './NumeroRomano';

function mostrarNumeroRomano() {
    const inputNumero = document.getElementById('numeroInput').value;
    const numero = parseInt(inputNumero, 10);
    const resultado = convertirANumerosRomanos(numero);
    document.getElementById('resultado').innerText = resultado;
}

document.getElementById('convertirBtn').addEventListener('click', mostrarNumeroRomano);

export default mostrarNumeroRomano;
