function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        img.src = 'Daylight.png'
        document.body.style.background = '#e4ed82'//para mudar a cor de fundo dinamicamente
    } else if(hora >=12 && hora <= 18){
        img.src = 'Afternoon.png'
        document.body.style.background = '#e08d51'
    } else{
        img.src = 'Night.png'
        document.body.style.background = '#778899'
    }
}