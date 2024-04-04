import React, { useState } from 'react'

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const editFunction = () => {
    setIsEditing((editing) => !editing);
  }
  return (
    <li>
      <span className="player">
        {!isEditing ? <span className="player-name">{name}</span> : <input type="text" required value={name} />}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editFunction}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  )
}
