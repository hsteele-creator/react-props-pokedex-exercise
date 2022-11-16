import React from "react"
import "./Pokecard.css"

const Pokecard = ({name, id, type, base_experience}) => {
       return (
            <div className="Pokecard-container">
            <h2 className="title">{name}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
            <p>{type}</p>
            <p>{base_experience}</p>
            </div>
        )
}

export default Pokecard