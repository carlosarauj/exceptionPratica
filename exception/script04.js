function check(numbers){
    if(!Array.isArray(numbers)){
        throw new Error('O argumento deve ser de um array')
    }
    let allPositive = numbers.every((num) => num > 0)
    if(!allPositive){
        throw new Error('O array tem que ser um number positivo')
    }
    return 

}

    try{
        let numarray = [1,2,3,4,5,6]

        let isPos = check(numarray)

        console.log(isPos)
    } catch (erro){
        console.log(`deu erro: ${erro.message}`)
    }