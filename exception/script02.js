let numarray = [1,2,3,4,5,6,7,8]

try{
    let numbers = numarray.map((num) => {
        if(typeof num !== 'number'){
        throw new Error('Use apenas numeros')
        }
        return num * 2

    })

    console.log(numbers)

} catch(error){
    console.log(`ocorreu um erro: ${error.message}`)
}



































