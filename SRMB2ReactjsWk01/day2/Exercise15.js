const student=[{studentId:1,studentName:'Divya',address:'adyar',city:'chennai',mark:87},
{studentId:2,studentName:'sakthi',address:'sahali',city:'Banglore',mark:70},
{studentId:3,studentName:'Krithi',address:'zeura',city:'Mumbai',mark:57},
{studentId:4,studentName:'brinha',address:'labra',city:'Delhi',mark:43}]
let newstudent=student.filter(student=>
    {
        var studentName=student.stuName;
        
        if(studentName=="krithi")
        return false;
        else
        return true;
    }).map((e)=>{
        console.log(`StudentName:${e.studentName}, StudentId:${e.studentId}, 
        Adrress:${e.address}, City:${e.city}, Marks:${e.mark}`)
        return e});