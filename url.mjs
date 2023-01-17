import {URL} from "url"; 

const irf = new URL("http://irfan.labsoftpolinela.id/irfan?kelas=nodejs");

irf.host = "www.irfan.com";
irf.searchParams.append("status", "premium")
console.info(irf.toString());
console.info(irf.href);
console.info(irf.protocol);
console.info(irf.host);
console.info(irf.pathname);
console.info(irf.searchParams);