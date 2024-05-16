import React from 'react'
import { useState } from 'react';

const Dict = () => {

    const [search,setSearch]=useState("")
    const[definition,setDefinition]=useState("")
    const data = [
        {
          word: "React",
          meaning: "A JavaScript library for building user interfaces.",
        },
    
        { word: "Component", meaning: "A reusable building block in React." },
    
        { word: "State", meaning: "An object that stores data for a component." },
      ];

      const handleClick = () => {
        if (search.trim() === "") {
            setDefinition("Please enter a word to search.");
            return;
        }
    
        const result = data.find((ele) => ele.word.trim() === search.trim());
        if (result === undefined) {
            setDefinition("Word not found in the dictionary.");
        } else {
            if (result.meaning) {
                setDefinition(result.meaning);
            } else {
                setDefinition("Definition not available for this word.");
            }
        }
    };
    
  return (
    <div>
     <h1>Dictionary App</h1> 
      <input type='text' value={search} placeholder='Search for a word ...' onChange={(e)=>setSearch(e.target.value)}></input> 
      <button onClick={handleClick}>Search</button>
      {definition && <p>{definition}</p>}
    </div>
  )
}

export default Dict