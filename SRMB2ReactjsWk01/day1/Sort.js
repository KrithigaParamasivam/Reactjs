const student=[{studentId:1,studentName:'krithiga',address:'adyar',city:'chennai',mark:80},
{studentId:2,studentName:'diviya',address:'redhillls',city:'Banglore',mark:90},
{studentId:3,studentName:'brindha',address:'triplicani',city:'Mumbai',mark:60},
{studentId:4,studentName:'bhuvi',address:'ropet',city:'Delhi',mark:70}]
student.sort((a, b) => {
    console.log(a);
    console.log(b);
    let fa = a.studentName.toLowerCase(),
        fb = b.studentName.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
console.log(" Sort the student details by Name: ");
student.forEach((e) => {
    console.log(`${e.studentName} ${e.studentId} ${e.address} ${e.city} ${e.mark}`);
});


const student=[{studentId:1,studentName:'krithiga',address:'adyar',city:'chennai',mark:80},
{studentId:2,studentName:'diviya',address:'redhillls',city:'Banglore',mark:90},
{studentId:3,studentName:'brindha',address:'triplicani',city:'Mumbai',mark:60},
{studentId:4,studentName:'bhuvi',address:'ropet',city:'Delhi',mark:70}]
student.sort((a, b) => {
    fa = a.stuName.toLowerCase();
    fb = b.stuName.toLowerCase();
    fc=a.city.toLowerCase();
    fd=b.city.toLowerCase();

if(fa < fb)
{
    if(fc < fd)
    {
    return -1;
    }
}
if(fa>fb) 
{
    if(fc>fd)
    {
    return 1;
    }
}
return 0;
});
console.log("\nSort the student details by Name and City: \n");
student.forEach((e) => {
    console.log(`${e.stuName} ${e.stuId} ${e.address} ${e.city} ${e.mark}`);
});