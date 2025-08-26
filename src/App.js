import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Greeting from './Greeting';

function App() {


  const name='shardul pawar';

  return (
    <div>
 
      <Greeting username={name}/>

   </div>

  
  );
}

export default App;
