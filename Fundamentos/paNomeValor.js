// par nome/valor

const saudacao = 'Contexto léxico 1 ' //Contexto léxico 1 

function exec(){
   const saudacao = 'Contexto léxico 2' //Contexto léxico 2
   return saudacao

}
//Objetos são grupos aninhados de pares nome/valor

const cliente = {
     nome : 'Darlon',
     idade: 32,
     peso: 92,
     endereco:{
        logradouro: 'Rua teste javaScript',
        numero: 1234
     }


}


console.log(saudacao)
console.log(exec())
console.log(cliente)


