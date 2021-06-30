import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MyClassComponent from './components/MyClassComponent';
import MyFunctionComponent from './components/MyFunctionComponent';

function App() {

  const [color,setColor] = useState("red");
  const [tgle,setTgle] = useState(false);

  const onChangeColor = (e)=>{
    setColor(e.target.value)
  }

  const onToggleComponent = ()=>{
    setTgle((prev)=>!prev);
  }

  return (
    <div className="App">
      <input type="text" value={color} onChange={onChangeColor} />
      <button onClick={onToggleComponent}>Toggle</button>
      <hr/>
      { tgle && <MyClassComponent color={color}/> }
      { !tgle && <MyFunctionComponent/> }
    </div>
  );
}

export default App;