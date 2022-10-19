const a = 2;
const b = 7;
const c = 16;
const min = Math.min(a, b, c);
let sum = 0;

if (a>min) sum +=a;
if (b>min) sum +=b;
if (c>min) sum +=c;
console.log(sum)