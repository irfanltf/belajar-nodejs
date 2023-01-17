import util from "util";

const name = "irfan";
const last = "lutfi";

console.info(`Hello ${name} ${last}`);
console.info(util.format("hello %s %s", name, last));
const person = {
    first :"Irfan",
    last :   "lutfi"
};
console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));

