import React, {useState} from 'react';
import './App.css';
import Message from './Message.js';

function App() {

  let [count,setcount] = useState(2)
  let [isMorning,setMorning] = useState(false)

  return (
    <div className={`box ${isMorning ? 'daylight' : '' }`}>
     


     <h1> Day time = {isMorning ? 'morning' : 'night'}</h1>
     
      <Message counter={count}/>

      <br/>
      <button onClick={()=> setcount(++count) }>iincrease number </button>
     <button onClick={()=> setMorning(!isMorning)}> Update Time  </button>
    </div>
  );
}

export default App;
