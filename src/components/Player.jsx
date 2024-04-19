import React, { useState } from 'react'

export default function Player({ initialName, symbol, isActive, onNameChange }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const editFunction = () => {
    setIsEditing((editing) => !editing);

    onNameChange(symbol, playerName);
  }
  function handleChange(e) {
    setPlayerName(e.target.value);
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {!isEditing ? <span className="player-name">{playerName}</span> : <input type="text" required value={playerName} onChange={handleChange} />}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editFunction}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  )
}
