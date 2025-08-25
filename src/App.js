import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

let student=[ {sr:"01",name:"Shardul",marks:"80"},
                 {sr:"02",name:"Gaurav",marks:"85"},
                 {sr:"03",name:"Shravni",marks:"90"},
                 {sr:"04",name:"Trusha",marks:"95"},
                 {sr:"05",name:"Rutuja",marks:"99"}
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
          return<tr>
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
