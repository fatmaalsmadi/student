//////let input = document.getElementById('input');
//let table = document.getElementById('table');
 //let fa = document.getElementById('id');

//let button = document.getElementById('button').addEventListener('click',get);
 //function get(){
     //let id = fa .value ;
//let num = input.value ;
    // fetch('http://localhost:4000/student?page=' +id, {
        //   method: 'GET',
        // })
        // .then(Response => Response.json())
       //  .then(data => {  
       //     console.log(data , data[1].id);

        // for(i = 0 ; i < data.length ; i++){
        //  table.innerHTML += ' <tr><th>' + data.id+' </th> <th> ' + data.first_name +'</th> <th> ' + data.last_name+'</th> <th> ' + data.grade+'</th></tr>';
        //     });
        //    }
let input = document.getElementById('input');
let table = document.getElementById('table');
let button = document.getElementById('button').addEventListener('click', post);
function post(){

    const obj = new Headers();
fetch('http://localhost:4000/student?' , {
    method: 'POST',

    headers: obj,
    body: JSON.stringify({
        first_name: Fname,
        last_name: Last,
        grade: grade,
      
    })
})

  .then(Response => Response.json())
  .then(data => {  
     console.log(data , data[1].id);

 // for(i = 0 ; i < data.length ; i++){
   table.innerHTML += ' <tr><th>' + data.id+' </th> <th> ' + data.first_name +'</th> <th> ' + data.last_name+'</th> <th> ' + data.grade+'</th></tr>';
      });
     }



