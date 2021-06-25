const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);


let map = new Map();
map.set('key1', 123);
console.log(map.get('key1')); // output 123
console.log(map.has('key1')) // output true
console.log(map.delete('key1')); // output true (removed)
console.log(map.has('key1')); // output false


let map = new Map();
map.set('1', 'str1');   //  string key
map.set(1, 'num1');     //  numeric key
map.set(true, 'bool1'); //  boolean key
console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'
console.log( map.size ); //3


