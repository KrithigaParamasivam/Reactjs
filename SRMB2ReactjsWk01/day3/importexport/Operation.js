import{add,mul,ECR_URL}  from './Arithmetic.js';
import  MyArithmetic  from './MyArithClass.js';
//import  num  from './MyArithClass.js';

console.log("Add:"+add(5,5));
console.log("Mul:"+mul(2,2));
console.log(ECR_URL);
let m=new MyArithmetic(3);
m.calc(3);
