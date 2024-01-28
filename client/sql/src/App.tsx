import { useState } from 'react'
import Axios from 'axios'

import './App.css'

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [position, setPosition] = useState('');

const addEmployee=()=>{
  console.log(name);
 Axios.post('http://localhost:3000/create',{
  name:name,
  age:age,
  position:position}).then(()=>{
    console.log("success");
  });
}

  return (
    <>
    <div className='App'>
      <label htmlFor="name">Name:</label>
     <input type="text" onChange={(e)=>{
      setName(e.target.value);
     }}/>

     <label htmlFor="age">Age:</label>
     <input type='number'  onChange={(event)=>{
      setAge(event.target.value as any);
     }}/>

     <label htmlFor="position">Position:</label>
     <input type="text"  onChange={(e)=>{
      setPosition(e.target.value);
     }}/>
  
     <button onClick={addEmployee}>Add Employee!</button>
    </div>
    </>
  )
}

export default App
