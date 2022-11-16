import React from "react"
import Pokecard from "./Pokecard"

const Pokedex = ({pokedex}) => {
    return (
        <>
        {pokedex.map(p => 
            <Pokecard name={p.name} id={p.id} type={p.type} base_experience={p.base_experience} />)}
        </>
    )
}

export default Pokedex