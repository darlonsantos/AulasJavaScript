function imprimirNotaAluno(nota){
   if(nota >= 7){
    console.log('Aprovado com', nota)
   }
  

}
imprimirNotaAluno(8.1)
imprimirNotaAluno(6.2) 


function estruturaValor(variavel){
     if (variavel){
       console.log('Existe valor...' + variavel)  
     }    

}
estruturaValor()
estruturaValor(null)
estruturaValor(undefined)
estruturaValor(NaN)
estruturaValor('')
estruturaValor(0)
estruturaValor(-1)
estruturaValor(' ')
estruturaValor('?')
estruturaValor([])
estruturaValor([1, 2])
estruturaValor({})





