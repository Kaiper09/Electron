document.getElementById('btnCAL').addEventListener('click', buttonClick);

let calculo = ''
let botoesPossiveis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'AC', 'CE', '+', '-', '/', '*', '=', '.']
let teste = 'Senac'
console.log(teste)
let testetamanho= teste.length
console.log(teste.substring(0, testetamanho-1))


function buttonClick(evento) {

    let value = evento.target.value
    if (!value) {
        return;
    }

    if (value == '=') {

        calculo = eval(calculo);

        display()
        return
    }

    if (value == "AC") {
        limparcalc()
        display()
        return
    }

    if (value =="CE"){
        console.log('TESTE')
        limparCE()

        display()
        return
        
    }

    calculo += value;
    display()


}

function limparcalc() {
    calculo = '';
    console.log("Calculadora limpa!!!")
    return
}

function display() {
    let display = document.getElementById('display')
    display.textContent = calculo

}

function limparCE(){
    calculo= calculo.substring(0, calculo.length-1)
    
}

