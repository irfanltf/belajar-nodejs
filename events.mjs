import {EventEmitter} from "events";

const emitter = new EventEmitter();


// listener merupakan callback yang akan dipanggil ketika melakukan emmit dengan jenis event yang sama
emitter.addListener("hello", (name)=>{
    console.info(`Hello ${name}`);
})
emitter.addListener("hello", (name)=>{
    console.info(`aku adalah ${name}`);
})

emitter.emit("hello", "irfan");

