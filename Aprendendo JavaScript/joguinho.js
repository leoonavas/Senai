var rl = require('readline')

const cnumber = Math.floor(Math.random() * 100) + 1;
const maxnumber = 100;
const minnumber =  1;

var read = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})
var response;
function NUMBER_GET() {
    read.question("Chute um número: ", function(a) {
        response = a;
        GAME(a);
    });
};
const lines = "=============================================";
NUMBER_GET();
var rsp2;

function GAME2(result) {
    if (result == "Y") {
        console.log("Iniciando...")
        read.question("Escolha um número: ", function(cb) {
            let new_number = Math.floor(Math.random() * 100) + 1;
            if (cb == new_number) {
                console.log("Parabéns! Você acertou!");
                read.close();
            } else {
                console.log(`Você errou! O número era: ${new_number}`);
                read.close();
            }
        })
    } else if (result == "N") {
        console.log("Saindo...")
        read.close();
    } else {
        console.log("Digite uma opção válida!")
        read.close();
    }
}
function GAME(number) {
    let chute = number;
    var concluido = false;
    if (chute == cnumber) {
        console.log("Você acertou o número!");
        concluido = true;
    } else if (chute > cnumber) {
        console.log("Tente um número menor na próxima vez.");
        concluido = true;
    } else if (chute < cnumber) {
        console.log("Tente um número maior da próxima vez");
        concluido = true;
    }

    console.log(lines);
    console.log(`O número correto era: ${cnumber}`)
    console.log(lines);
    read.question("Deseja jogar novamente? (Y/N): ", function(a) {
        rsp2 = a;
        GAME2(rsp2);
    });
}


