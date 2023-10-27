function calculo() {
    PESO = document.getElementById("peso").value;
    ALTURA = document.getElementById("altura").value;
    document.getElementById("IMC").innerHTML = PESO/ALTURA * ALTURA;
}
