import players from "../data/players";
import Players from "./Players";

import React from 'react'

function PlayersList() {
  return (
    <div style={{display: "flex", justifyContent:"center"}}>
      {players.map((players,index)=>(
        <Players key={index}{...players} />
      ))}
    </div>
  )
}

export default PlayersList;
