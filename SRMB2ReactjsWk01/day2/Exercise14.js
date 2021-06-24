const student=[{studentId:1,studentName:'krithiga',address:'no124,selo street,600096',city:'Chennai',marks:40},
{studentId:2,studentName:'divya',address:'#24,Ohio street,600023',city:'Bangalore',marks:59},
{studentId:3,studentName:'shero',address:'no:45,viola street,600096',city:'Madurai',marks:74},
{studentId:4,studentName:'brindha',address:'#4050,Parkington street,600023',city:'Bangalore',marks:60},
{studentId:5,studentName:'Sakthi',address:'#3,Pulio street,600023',city:'Mysore',marks:65},]

console.log("\n student details to Add 20 marks to all : \n");
const newstudents=student.map((e)=>{
    e.marks+=20;
    return e}).map((e)=>{ 
        if(e.address.includes('600023'))
        {
            e.marks+=15;
        }  
        console.log(`StudentName:${e.studentName}, City:${e.city}, StudentId:${e.studentId}, Adrress:${e.address}, Marks:${e.marks}`);
        return e;  
    });