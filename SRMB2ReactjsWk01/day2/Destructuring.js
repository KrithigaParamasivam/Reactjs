//using arrays
var names = ["alpha", "beta", "gamma", "delta"];
var [firstName, secondName] = names;
      
console.log(firstName);
console.log(secondName);

//using objects
let marks = {x: 50, y: 60, z: 70 };

let x = marks.x; //x=50
let y = marks.y; //y=60
let z = marks.z; //z=70
  
console.log(x);
console.log(y);
console.log(z);

//using rest

let a, b;
[a, b] = [10, 20];

console.log(a);//10
console.log(b);//20



[a, b, ...rest] = [60, 20, 30, 40, 50];
console.log(a);
console.log(rest);

