import fs, { read, write } from "fs";

const writer = fs.createWriteStream("target.log");


writer.write("muhammad");
writer.write("Irfan");
writer.write("Lutfi");
writer.end();


const reader = fs.createReadStream("target.log");
reader.addListener("data", (data)=>{
    console.info(data.toString());
})