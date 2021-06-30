import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MyClassComponent from './components/MyClassComponent';

function App() {

  const [color,setColor] = useState("red");

  const onChangeColor = (e)=>{
    setColor(e.target.value)
  }

  return (
    <div className="App">
      <input type="text" value={color} onChange={onChangeColor} />
      <hr/>
      <MyClassComponent color={color}/>

    </div>
  );
}

export default App;