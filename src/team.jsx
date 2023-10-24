import { useState } from "react"

export default function Team(){
    const [team,setTeam] = useState(11)
    const teamStyle ={
        border: "1px solid purple",
        margin: "15px",
        padding: "15px",
        borderRadius: "15px"
    }
    // Adding Team
    function addPlayer(){
        const newTeam = team + 1
        setTeam(newTeam)
    }

    // Removing team
    function removePlayer(){
        setTeam(team-1)
    }
    

    return(
        <div style={teamStyle}>
            <h3>Player: {team}</h3>
            <button onClick={addPlayer}>Add Player</button>
            <button onClick={removePlayer}>Remove Player</button>
        </div>
    )
}