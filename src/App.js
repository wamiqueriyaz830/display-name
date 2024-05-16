// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [fname,setFname]=useState("")
  const [lname,setLname]=useState("")
  const [data,setData]=useState(null)

  console.log(fname,lname);
  const handleSubmit=(e)=>{
   e.preventDefault()
   setData({fname,lname})
   setFname("")
   setLname("")
  }
  return (
   <>
   <h1>Full Name Display</h1>
   <form onSubmit={handleSubmit}>
    <label>First Name:</label>
    <input required={true} type='text' value={fname} onChange={(e)=>{setFname(e.target.value)}}></input>
    <label>Last Name:</label>
    <input required={true} type='text' value={lname} onChange={(e)=>{setLname(e.target.value)}}></input>
    <button type='submit'>Submit</button>
   </form>
    {data && <>
    <p>Full Name :{data.fname}{data.lname}</p>
    </>}
   </>
  );
}

export default App;
