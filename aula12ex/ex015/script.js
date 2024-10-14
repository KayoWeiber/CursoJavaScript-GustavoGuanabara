function verificar(){
    var data= new Date()
    var ano= data.getFullYear()
    var fano=document.getElementById('txtano')
    var res= document.getElementById('res')
    if(fano.value.length==0||Number(fano.value)>ano){
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else{
        var fsex=document.getElementsByName('radsex')
        var idade= ano-Number(fano.value)
    // res.innerHTML= `idade calculada: ${idade} anos`
    var gênero=''
    var img= document.createElement('img')
    img.setAttribute('id','foto')
    if(fsex[0].checked){
        gênero= 'homem'
        document.body.style.background=('#1763e0')
   
        if(idade>=0 && idade<10){
            //criança 
            img.setAttribute('src','crianca-homem.png')
        } else if(idade<21){ 
            //jovem
            img.setAttribute('src', 'adolescente-homem.png')
        }else if(idade<50){
            //adulto
            img.setAttribute('src', 'adulto-homem.png')
        } else{
            //idoso
            img.setAttribute('src', 'idoso-homem.png')
        }
    }else if(fsex[1].checked){
        gênero='mulher'
        document.body.style.background=('pink')
   
        if(idade>=0 && idade<10){
            //criança
            img.setAttribute('src', 'crianca-mulher.png')
        } else if(idade<21){ 
            //jovem
            img.setAttribute('src', 'adolescente-mulher.png')
        }else if(idade<50){
            //adulto
            img.setAttribute('src', 'adulto-mulher.png')
        } else{
            //idoso
            img.setAttribute('src', 'idoso-mulher.png')
        }

    }
    res.style.textAlign= 'center'
    res.innerHTML= `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
    //res.fsex[1].checked=document.body.style.background=('pink')
   
    }

}