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
