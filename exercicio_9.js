function esperarUmSegundo() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}
async function main() {
    for (let i = 1; 5 >= i; i++) {
        console.log(i)
        await esperarUmSegundo();
    }
}
main();