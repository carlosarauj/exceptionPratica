function PassName(nome, callback){
    if(typeof nome !== 'string'){
        callback(new Error('O nome deve ser uma string'))
        return
        
    } else if (nome.length === 0){
        callback(new Error('O nome deve conter algum caractere'))
        return
    } 

    callback(null, `Nome processado com sucesso: ${nome}`)
}

PassName('Carlos', (erro,resultado) => {
    if(erro){
        console.log('Deu erro', erro.message)
    } else {
        console.log(resultado)
    }
})

















































