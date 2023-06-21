// 1
let yyy = [2, 5, 1, 8, 4]
let sss = 0
for(let i in yyy){
    sss += yyy[i]
}  

console.log(sss);

// 3

const stoto = {
    a: 1
}

let kluc = 0
let znac = 0

for(let i in stoto){
    znac = stoto[i]
}  

for(let m in stoto){
    kluc = m
}  

console.log(`["${kluc}", ${znac}]`);

// 5

const hhhh = [381]

var b = String(hhhh).length;
console.log(b);

