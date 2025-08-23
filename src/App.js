import logo from './logo.svg';
import './App.css';

function App() {




     let obj={name:"Shardul",STD:"TYBCS",CLG:"BJ"}

    let out=console.log(obj)





  return (
    <div>
     
    <p><h1>Name: {obj.name}</h1> <h2>CLG: {obj.CLG}</h2>
      <h3>Std: {obj.STD} </h3>
       
{out}
     </p>
    </div>
  );
}

export default App;
