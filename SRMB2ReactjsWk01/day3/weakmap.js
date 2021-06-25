//let john = { name: "John" };
//john = null;

let visit = new Map(); 
function countBook(book) {
  let count = visit.get(book) || 0;
  visit.set(book, count + 1);
  console.log(count);
}
 
let js = {
  name: "Javascript"
};
countBook(js); 
countBook(js); 
js = null;
console.log(js);