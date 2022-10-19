const a = 2;
const b = 7;
const c = 16;
let mid = a;
let min = Math.min(a, b, c)
let max = Math.max(a, b, c)

if (b > min && b < max){
    mid = b;
}else if (c> min && c<max) {
    mid = c;
}

console.log(mid);