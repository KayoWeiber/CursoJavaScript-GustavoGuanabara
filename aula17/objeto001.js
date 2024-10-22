let amigo={ nome:'José',
sexo:'m',
peso:85.4,
engordar(p=7){
    console.log('engordou')
    this.peso+=p
}}
    console.log(`${amigo.nome} pesa ${amigo.peso}kg`)