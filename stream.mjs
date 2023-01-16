import fs, { write } from "fs";

const writer = fs.createWriteStream("target.log");


writer.write("muhammad");
writer.write("Irfan");
writer.write("Lutfi");
writer.end();
