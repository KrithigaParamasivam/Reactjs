const Employee = {
    firstname: 'krithi',
    lastname: 'yazhini'
  };
  
  console.log(Employee.firstname);
  
  delete Employee.firstname;
  
  console.log(Employee.firstname);
  
  
  
const colors = ["red", "blue", "white"];
  console.log("original array: "+" "+colors);
//change 
colors[0] = "yellow";
   console.log("After replacing red with yellow :"+" "+colors);
//add 
colors.push("green","black");
console.log("After adding green and black to colors:"+" "+colors);
//delete
delete colors[1];
colors.pop();
console.log("After deleting blue:"+" "+colors);
  