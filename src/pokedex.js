import React from "react"

const pokedex = ({pokedex}) => {
       return (
        <>
        {pokedex.map(p => {
            <>
            <h2>{p.name}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}/>
            <p>{p.type}</p>
            <p>{p.base_experience}</p>
            </>
        })}
        </>
        )
}

export default pokedex