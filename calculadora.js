var rl = require('readline');
var reader = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

var n1;
var n2;
var operation;
var result;
var lines = "\n=========================================\n"
reader.question("Digite o tipo de conta (+, -, *, /): ", function(conta) {
    operation = conta;
    reader.question("Número 1: ", function(num1) {
        n1 = num1;
        reader.question("Número 2: ", function(num2) {
            n2 = num2;
            console.log(lines)
            if (operation == "+") {
                result = (n1 + n2)
                console.log(`Operação: ADIÇÃO\n${n1} + ${n2} = ${result}`)
            } else if (operation == "-") {
                result = n1 - n2
                console.log(`Operação: SUBTRAÇÃO\n${n1} - ${n2} = ${result}`)
            } else if (operation == "*") {
                result = n1 * n2
                console.log(`Operação: MULTIPLICAÇÃO\n${n1} x ${n2} = ${result}`)
            } else if (operation == "/") {
                result = n1 / n2
                console.log(`Operação: DIVISÃO\n${n1} / ${n2} = ${result}`)
            }
            console.log(lines)
            reader.close();
        })
        
    })
})
