let num=[ 5, 8 ,2,9,3]
num.push(1)
//num.sort()
console.log(num)
console.log(`Nosso vetor é o ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos=num.indexOf(8)
if(pos==-1){ console.log('o Valor não existe!')}else{
    console.log(
        `o Valor está na posição ${pos}`
    )
}
