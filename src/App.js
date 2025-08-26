import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import BCS from './BCS';
import BCA from'./BCA';

function App() {

 let student=[
  {name:"shardul",Dep:"BCS"},
  {name:"Gaurav",Dep:"BCS"},
  {name:"Sharavni",Dep:"BCA"},
  {name:"Rutuja",Dep:"BCA"},
  {name:"Trusha",Dep:"BCS"},
  {name:"Ayush",Dep:"BCS"},
 ]
  
 


  return (
    <div>
      
     {student.map((singleElement)=>{

      return (singleElement.Dep==="BCS" ?<h1> <BCS table={singleElement.name}/></h1>: <h1> <BCA name={singleElement.name} /></h1>)
     })}                                
    
    
   </div>

  
  );

}
export default App;
