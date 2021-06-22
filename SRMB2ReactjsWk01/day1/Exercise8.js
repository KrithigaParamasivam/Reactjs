let emp=["divya","krithika","sakthi","brindha","bhuvi"];

    const str=emp.map((x,idx)=>{
        if (idx%2==0)   
    return `Er.${x}`;
    else
    return `Dr.${x}`;    
})
console.log(str);