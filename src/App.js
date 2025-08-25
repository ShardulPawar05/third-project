import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

let student=[ {sr:"01",name:"Shardul",marks:100},
                 {sr:"02",name:"Gaurav",marks:85},
                 {sr:"03",name:"Shravni",marks:100},
                 {sr:"04",name:"Trusha",marks:95},
                 {sr:"05",name:"Rutuja",marks:100}
]



  return (
  <div>
    <table border={1}>
      <tr>
      <th>SR.NO</th>
      <th>Name</th>
      <th>Marks</th>
      </tr>
    
        {student.map((singlkey)=>{
          return<tr className={singlkey.marks===100&&'rowColor'} >
           
          <td>{singlkey.sr}</td>
          <td>{singlkey.name}</td>
          <td>{singlkey.marks}</td>
          </tr>
          
        })}
      



    </table>


  </div>
  );
}

export default App;
