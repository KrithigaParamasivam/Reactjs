function isNumeric(num){
    return !isNaN(num)
  }
  let a=isNumeric("100");
  if (a)
  {
  console.log("Given string is Numeric");
  }
  else 
  {
    console.log("Given string is Not Numeric");
  }
