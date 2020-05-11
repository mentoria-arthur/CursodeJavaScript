function contar() {
    let inicio = document.querySelector('input#txtinicio')
    let fim = document.querySelector('input#txtfim')
    let passo = document.querySelector('input#txtpasso')
    let res = document.querySelector('div#resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Preencha todos os dados!')
    } else{
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem CRESCENTE
            for(let contador = i; contador <= f; contador += p) {
                res.innerHTML += ` ${contador} \u{1F449}`
            }    
        } else {
            // Contagem REGRESSIVA 
            for(let contador = i; contador >= f; contador -= p) {
                res.innerHTML += ` ${contador} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}