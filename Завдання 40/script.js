let a = 17;
let b = 17;
let c = 30;
let diff = a;

if (a === b) diff = c;
if (a === c) diff = b;
if (b === c) diff = a;
console.log(diff);