import{useState, useRef} from 'react';

import './App.css';
import Nav from './Navigation/NavBar';

function App() {
  const names= useRef();
 
  const [data, setData]=useState();
 
  function handleChange(){
    console.log();
    setData(names.current.value);
  }
 
  return (
    <div>
      <label>Name</label>
      <input type='text'value={data} />
      <textarea type="text"   ref={names}/>
      <button onClick={handleChange}>Save</button>
      <p>{data}</p>
    <Nav/>
    </div>
  );
}

export default App;
