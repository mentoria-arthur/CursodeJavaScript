function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0  || Number(fano.value) > ano) {
        window.alert('[ERRO] Preencha os dados e verifique novamente!')
    } else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
           if(idade >=0 && idade < 10){
               //Criança
               img.setAttribute('src', './img/bebe-m.png')
               document.body.style.background = '#5573c4'
               gênero = 'Uma criança'
           } else if (idade < 21){
               //Jovem
               img.setAttribute('src', './img/jovem-m.png')
               document.body.style.background = '#38b954'
               gênero = 'Um jovem'
           } else if (idade < 50){
               //Adulto
               img.setAttribute('src', './img/adulto-m.png')
               document.body.style.background = '#2d4483'
               gênero = 'Um adulto'
           } else {
               //Idoso
               img.setAttribute('src', './img/idoso-m.png')
               document.body.style.background = '#38b992'
               gênero = 'Um idoso'
           }
       } else if (fsex[1].checked){
           if (idade >=0 && idade < 10){
               //Criança
               img.setAttribute('src', './img/bebe-f.png')
               document.body.style.background = '#b18c27'
               gênero = 'Uma criança'
           } else if (idade < 21){
               //Jovem
               img.setAttribute('src', './img/jovem-f.png')
               document.body.style.background = '#b9646f'
               gênero = 'Uma jovem'
           } else if (idade < 50){
               //Adulto
               img.setAttribute('src', './img/adulto-f.png')
               document.body.style.background = '#c24eda'
               gênero = 'Uma adulta'
           } else {
               //Idoso
               img.setAttribute('src', './img/idoso-f.png')
               document.body.style.background = '#da6a4e'
               gênero = 'Uma idosa'
           }
       }
       res.innerHTML = `Dectectamos : <strong>${gênero}</strong> com a idade de <strong>${idade} anos</strong>`
       res.appendChild(img)
    }
}