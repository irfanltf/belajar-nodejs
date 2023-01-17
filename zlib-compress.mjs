import fs from "fs";
import  zlib from "zlib";
// proses membaca file 
const source = fs.readFileSync("zlib-compress.mjs");
// proses compress menggunakan zlib
const gzib = zlib.gzipSync(source);
// write file dari file yang s udah di kompres
fs.writeFileSync("zlib-compress.mjs.txt", gzib);
const sourceCompress = fs.readFileSync("zlib-compress.mjs.txt");
//decompress-
const ungzib = zlib.unzipSync(sourceCompress)
console.info(ungzib.toString());