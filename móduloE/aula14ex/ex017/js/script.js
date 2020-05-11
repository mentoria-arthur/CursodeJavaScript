function tabuada(){
    let num = document.querySelector('input#txtnumero')
    let tab = document.querySelector('select#seltab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let numero = Number(num.value)
        tab.innerHTML = ''
        for(let contador = 1; contador <=10; contador++){
            let item = document.createElement('option')
            item.text = `${numero} x ${contador} = ${numero*contador}`
            item.value = `tab${contador}`
            tab.appendChild(item)
        }
    }
}

        /*
        let contador = 1
            while (contador <= 10) {
            let item = document.createElement('option')
            item.text = `${numero} x ${contador} = ${numero*contador}`
            tab.appendChild(item)
            contador++
        */