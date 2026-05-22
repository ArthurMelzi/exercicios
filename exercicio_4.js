const fs = require("fs")

fs.readFile("mensagem.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Erro:", err)
        return
    }
    console.log(data)
})