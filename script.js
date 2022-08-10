const btnCalcular = document.querySelector('#btn-calcular');

btnCalcular.onclick = () => {
    const valor1 = document.querySelector('#valor1').value;
    const valor2 = document.querySelector('#valor2').value;
    const operacao = document.querySelector('#operacao').value;

    let total = ''
    if (operacao === 'soma') {
        total = parseInt(valor1) + parseInt(valor2)
    } else if (operacao === 'subtracao') {
        total = valor1 - valor2
    } else if (operacao === 'multiplicacao') {
        total = valor1 * valor2
    } else {
        total = valor1 / valor2
    }

    alert(total);
}

