const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
 for(let i in notas ){
     console.log(i, notas[i])
 }

 const pessoa = {
      nome: 'Ana',
      sobreNome: 'Silva',
      idade: 29,
      peso: 64
    }
for(let atributos in pessoa){
   console.log(`${atributos}= ${pessoa[atributos]}`) 
}
