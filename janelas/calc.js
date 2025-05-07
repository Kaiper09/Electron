document.getElementById('btnCAL').addEventListener('click', buttonClick);

let calculo = ''

function buttonClick(evento) {

    let value = evento.target.value
    if (value == '=') {

        calculo = eval(calculo);
        
        display()
        return
    }

    if(value == "AC"){
        limparcalc()
        display()
        return
    }

    calculo += value;
    display()
}

function limparcalc(){
    calculo= '';
    console.log("Calculadora limpa!!!")
    return
}

function display(){
    let display= document.getElementById('display')
    display.textContent = calculo
    
}


