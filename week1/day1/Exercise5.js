var cus_name1="Pooja";
function use(a)
{
    var cus_name1="VJ";
    console.log("Var function scope: "+"\n Customer 1 name: "+cus_name1);
    if(a<=10)
    {
        let cust_name2="Dave";
        console.log("Let scope: "+"\n Customer 2: "+cust_name2);
    }
    console.log("we cannot access let outside block"+cust_name2);
}
console.log("Var global scope:"+"The customer 1 name "+cus_name1);
use(10)