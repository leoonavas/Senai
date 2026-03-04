var rl = require('readline');
var reader = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

const username = "leo";
const password = "leo123";
var user_new;
var user_pass;
var cin;
console.log("[1] - Login");
console.log("[2] - Register\n\n");
reader.question("Option: ", function(a) {
    cin = a;
    if (cin == "1") {
        console.log("Logando...");
        console.log("\n")
        reader.question("User: ", function(an) {
            if (an == username) {
                reader.question("Password: ", function(ans) {
                    if (ans == password) {
                        console.log("Logado com sucesso!");
                        reader.close();
                    } else {
                        console.log("Senha incorreta!");
                        reader.close();
                    }
                })
            } else {
                console.log("Usuário inválido!")
                reader.close();
            }
        })
    } else if (cin == "2") {
        reader.question("Qual será seu nome de usuário? - ", function(ans) {
            user_new = ans;
            reader.question("Qual será sua senha? - ", function(answ) {
                user_pass = answ;
                console.log("Registrado com sucesso!");
                console.log(`User cadastrado: ${user_new}`)
                console.log(`Senha cadastrada: ${user_pass}`)
                reader.close();
            })
        })
    } else {
        console.log("Opção inválida!")
        reader.close();
    };
})
