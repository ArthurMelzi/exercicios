const fs = require("fs")

fs.writeFile("mensagem.txt", "Node.js é poderoso!", "utf-8", (err) => {
    if (err) {
        console.log("Erro: ", err)
    }
    console.log("Arquivo criado com sucesso!")
});
// nn deu pra atualizar pelo vs code, o commit nn foi
