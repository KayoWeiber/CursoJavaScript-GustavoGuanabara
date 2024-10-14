function carregar(){
var msg=window.document.getElementById('msg')
var img=window.document.getElementById('imagem')
var data= new Date()
var hora= data.getHours()
//var hora=17
msg.innerHTML= `Agora são ${hora} horas!`

    if(hora>=0 && hora<12){
        //bom dia
       img.src='fotomanha.png'
       document.body.style.background=('#efcfa7')
    }else if(hora>=12 && hora< 18){
    //boa tarde
    img.src='fototarde.png'
    document.body.style.background=('#d07d4d')
    }
    else{ 
        img.src='fotonoite.png'
        document.body.style.background=('#251b1a')
        //boa noite
    }

}