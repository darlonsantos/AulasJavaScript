const nome = 'Rebeca'
const concatenacao =  'Olá ' + nome + '!'
const templete = `Olá ${nome}!`

console.log(concatenacao, templete)


console.log(`1 + 1  = ${1 + 1 }`)

const up = texto => texto.toUpperCase()
console.log(`Ei...${up('cuidado')}!`)

function soma()
{
    let um  = 1 
    let dois = 2
    let tres = 3
    let valorMaior = 2012
    let resultado = dois + um + tres * valorMaior
  return  resultado

}

console.log(soma())
