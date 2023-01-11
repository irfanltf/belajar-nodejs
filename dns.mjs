import dns from "dns/promises";

const ip = await dns.lookup("irfan.labsoftpolinela.id");

console.info(ip.address);
console.info(ip.family);