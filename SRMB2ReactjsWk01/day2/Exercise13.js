const student=[{studentId:1,studentName:'danny',address:'adyar',city:'chennai',mark:87},
{studentId:2,stuName:'sara',address:'lazur',city:'Banglore',mark:70},
{stuId:3,studentName:'kevin',address:'naro',city:'Mumbai',mark:57},
{stuId:4,studentName:'ram',address:'rastre',city:'Delhi',mark:43}]
const newstudents=student.filter(student => {
    let city=student.city;
    if(city =="Banglore" || city=="chennai")  
    return true;
    else
    return false;
    }).map((e)=>{
        console.log(`StudentName:${e.studentName}, StudentId:${e.studentId}, Adrress:${e.address}, City:${e.city}, Marks:${e.mark}`)
        return e});