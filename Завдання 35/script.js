let a = 2;
let b = 7;
if (a===b) {
     a=0;
     b=0;
}else{
    a=Math.max(a, b)
    b=a;
}
console.log(a, b)