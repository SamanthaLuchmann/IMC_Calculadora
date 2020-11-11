function calcular() {
    let pes = document.querySelector('#peso').value.replace(',', '.');
    let alt = document.querySelector('#altura').value.replace(',', '.');
    let imc = pes / (alt * alt);
    if (Number.isNaN(imc))
        imc = 0;


    if (pes <= 0 || alt <= 0) {
        popupWindow = window.open('popup.html', 'pagina', "width=250 height=150 left=530 top=230 ");
    }

    if (imc > 0 && imc < 18.5) {
        document.querySelector('#resultado2').innerHTML = ("Baixo peso")
    }
    else if (imc > 18.5 && imc <= 25) {
        document.querySelector('#resultado2').innerHTML = ("Peso ideal")
    }
    else if (imc > 25 && imc <= 30) {
        document.querySelector('#resultado2').innerHTML = ("Sobrepeso")
    }
    else if (imc > 30 && imc <= 35) {
        document.querySelector('#resultado2').innerHTML = ("Obesidade Grau 1")
    }
    else if (imc > 35 && imc <= 40) {
        document.querySelector('#resultado2').innerHTML = ("Obesidade Grau 2")
    }
    else if (imc > 40) {
        document.querySelector('#resultado2').innerHTML = ("Obesidade Grau 3")
    }

    document.querySelector('#resultado').innerHTML = imc.toFixed(2);

}


