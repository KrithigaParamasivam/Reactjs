var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  
  
  items.sort(function (a, b) {
    return a.value - b.value;
  });
  
 
  items.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); 
    var nameB = b.name.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
   
    return 0;
  });
  
items.forEach((e) => {
    console.log(`${e.name} ${e.value} `);
});
