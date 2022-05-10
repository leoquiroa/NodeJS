//Convert from string
console.log("Convert from string");
const buf0 = Buffer.from("Hey buddy");
console.log(buf0);
console.log(buf0[0]); //convert to Unicode
console.log("--");
//Allocate and change value
console.log("Allocate and change value");
const buf1 = Buffer.alloc(4);
buf1.write("Leo");
console.log(buf1.toString());
console.log(buf1);
buf1[1] = 111; //o
console.log(buf1.toString());
console.log(buf1);
console.log("--");