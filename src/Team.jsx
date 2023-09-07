import { useState } from "react"

export default function Team(){
    const [players,setPlayers]=useState(11);

    const handleAdd=()=>{
        const newPlayers= players+1;
        setPlayers(newPlayers)
    }
    const handleRemove=()=>{
        const newPlayers= players-1;
        setPlayers(newPlayers)
    }
    return (
        <div style={{backgroundColor:'skyBlue',border:'2px solid purple',borderRadius:'10px',marginTop:'4px'}}>
            <h2>Players:{players}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}