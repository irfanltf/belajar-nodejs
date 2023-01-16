import readline from "readline";
import process from "process";


const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

input.question("Siapa nama anda?", (name)=>{
    input.question("berapa umur anda?", (umur)=>{
        console.info(`hallo ${name}`); 
        console.info(`umur anda ${umur}`);
        input.close();
    })
})