import process from "process";

process.addListener("exit", (exitCode)=>{
    console.info(`NodeJS exit with code ${exitCode}`);
})
// menampilkan versi node js
console.info(process.version);
// menampimlkan argument
console.table(process.argv);
// menampilkan data report  dari proses node js
console.table(process.report);
// menampilkan environment variable
console.table(process.env);
// untuk keluar, maka kode setelah ini tiidak adak dieksekusi
process.exit(1);
