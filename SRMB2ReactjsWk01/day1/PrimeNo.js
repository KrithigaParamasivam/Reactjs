const num=[3,4,5,6,7,8,9,10,13,15,22,25,17];
for(let i=0;i<num.length;i++)
{
    number=num[i];
let isPrime = true;
if (number > 1) {

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } 
}
}
