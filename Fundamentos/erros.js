function tratarErroElancar(erro){
throw new Error('Erro no javaScript')
}

function imprimirNomeComErro(obj){
    try{
         
console.log(obj.name.toUpperCase() + 'teste')

    } catch (e){
    tratarErroElancar(e)    
    } finally{
      console.log('Finalizado com sucesso!')
    }
}


const obj = {nnme: 'Darlon'}
imprimirNomeComErro(obj)