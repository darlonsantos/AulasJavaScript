console.log(Math.ceil(6.1))


const objet1 = {}
objet1.nome = 'Teste1'

console.log(objet1.nome)

function Obj(nome){
    this.nome = nome
   this.exec =  function(){
     console.log('teste de desenvolvimento1')
   }

}

const obj2 = new Obj('teste desenv 01')
const obj3 = new Obj('teste desenv 02')

console.log(obj2.nome)
console.log(obj3.nome)

obj3.exec()
