function Contar() {
    var num=document.getElementById('txtnumber')
    var num2=document.getElementById('txtnumber2')
    var num3= document.getElementById('txtnumber3')
    var res= document.getElementById('res')

if( num.value.length==0||num2.value.length==0||num3.value.length==0){
     res.innerHTML='Impossivel contar!'
     //window.alert('[erro] Tem algo não preenchido')
   
}else{
   res.innerHTML='Contando:'
   let i= Number(num.value)
   let f= Number(num2.value)
   let p= Number(num3.value)
   if(p<=0){
    window.alert('Passo invalido! Considerando PASSO 1')
    p=1
   }
if(i<f){
      for(var c=i; c<=f; c+=p){
        res.innerHTML += ` ${c} \u{1F449}	`  
//contagem crescente
      }
   
}else{
     //contagem regressiva
     for(var c=1; c>=f;c+=p){
        res.innerHTML += ` ${c} \u{1F449}	`   
     }
}
res.innerHTML+= `\u{1F3C1}`
}
}