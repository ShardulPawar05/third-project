import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Greeting from './Greeting';

function App() {


let student=["shardul","Gaurav","Trusha","Sharvni","rutuja"]
  return (
    <div>
 
      <Greeting username={student}/>

   </div>

  
  );
}

export default App;
