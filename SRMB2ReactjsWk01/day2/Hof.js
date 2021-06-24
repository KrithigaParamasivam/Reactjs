function addX(x) {
    return function (y) {
      return x + y;
    }
}

const add1 = addX(1);
console.log(add1(5)); //6


