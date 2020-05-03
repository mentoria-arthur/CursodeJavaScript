function nacionalidade () {
    var país = document.querySelector('input#txtp').value.toUpperCase()
    var res = document.querySelector('div#res')
    res.innerHTML = `<p>Vivendo em ${país}` //Template String
    if(país == 'BRASIL' || país == 'BR' || país == 'BRA' || país == 'BRAZIL'){
        res.innerHTML += 'Você é Brasileiro'
    }else{
        res.innerHTML += 'Você é Estrangeiro'
    }
}