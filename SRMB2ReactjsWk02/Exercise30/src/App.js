import logo from './logo.svg';
import './App.css';
import Label from './components/Label';

function App() {
  const userName="krithiga";
  const dte=new Date();
  return (  
    <div className="App">
      <h1 style={{color:'red',backgroundColor:'grey'}}>{userName}</h1>
      <h2 style={{color:'blue',backgroundColor:'lightblue'}}>{dte.toString()}</h2>
      <hr/>
      <Label value={userName}/>

    </div>
  )
}

export default App;
