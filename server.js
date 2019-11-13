const express = require('express')
const app = express()
const port = 4000
let pagesize = 5;

const fs = require('fs');
let Student;
let FileName = 'student.json';
fs.readFile(FileName, 'utf-8', (err, data) => {
    if (err) {
        console.log(err.message);
    } else {
      
        Student = JSON.parse(data);
        console.log(Student);
    }
});
app.get("/Student", (req, res) => {
    let page = req.query.page;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    start = (page-1) * pagesize;
    end = start + pagesize;
    res.send(Student.slice(start, end));
});

  app.post( "/Student", (req, res) =>{
    
   key={
       key : length+1,
       
   }
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "*");
      let a=Student.find(t => t.Fname==Fname);
      let a=Student.find(t => t.lname==lname);
      let a=Student.find(t => t.grade==grade);
      console.log(a);
      res.send(a)
      });
app.listen(port);