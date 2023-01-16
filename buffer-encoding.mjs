//pada argument ke 2 diisi jenis encoding, jika tidak diisi
//maka secara ptpmatis encoding yangg digunakan adalah utf8
const buffer = Buffer.from("Muhammad Irfan Lutfi", "utf8");

//menampilkan hasil buffr yang dikonversi ke string
console.info(buffer.toString());
//menam[ilkan hasil buffer yang dikonversi ke encoding ke hex
console.info(buffer.toString("hex"));
//menampimlkan hasi lbuffer yang dikonversi ke encoding base64
const base64var= buffer.toString("base64");
console.info(base64var);

//konversi lagi ke utf8
const bufferBase64 = Buffer.from(base64var, "base64");
// konversi lagi ke sting
console.info(bufferBase64.toString("utf8"));