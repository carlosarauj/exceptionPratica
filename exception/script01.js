function div(a,b){
    if (b === 0){
        throw new Error('Divisão impossível')
    }
    return a / b
}

try {
    let result = div(10, 0)
    console.log(`o resultado é ${result}`)
} catch(error){
    console.log(`ocorreu um erro: ${error.message}` )
}
