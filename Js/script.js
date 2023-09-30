function iniciarCalculadora() {
    var operacion = parseInt(prompt("Elija una operación:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División"));

    if (operacion >= 1 && operacion <= 4) {
        var numero1 = parseFloat(prompt("Ingrese el primer número:"));
        var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
        var resultado;
        switch (operacion) {
            case 1:
                resultado = numero1 + numero2;
                document.getElementById("resultado").innerHTML = "Resultado de la suma: " + resultado;
                break;
            case 2:
                resultado = numero1 - numero2;
                document.getElementById("resultado").innerHTML = "Resultado de la resta: " + resultado;
                break;
            case 3:
                resultado = numero1 * numero2;
                document.getElementById("resultado").innerHTML = "Resultado de la multiplicación: " + resultado;
                break;
            case 4:
                if (numero2 !== 0) {
                    resultado = numero1 / numero2;
                    document.getElementById("resultado").innerHTML = "Resultado de la división: " + resultado;
                } else {
                    document.getElementById("resultado").innerHTML = "Error: No se puede dividir por cero.";
                }
                break;
        }
    } 
}
