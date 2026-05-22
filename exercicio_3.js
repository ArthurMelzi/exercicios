const fs = require("fs")

fs.writefile("mensagem.txt", "Node.js é poderoso!", "utf-8", (err) => {
    if (err) {
        console.log("Erro: ", err)
    }
    console.log("Arquivo criado com sucesso!")
});
