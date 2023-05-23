import { useEffect, useState } from "react";
import axios from "axios";

export default function PostPokemon (props) {
    console.log('test')
    if (props.pokemonDataArray.length > 0) {
        props.pokemonDataArray.map((pokemon) => {

            const obj = {
                name: pokemon.name,
                moves: pokemon.moves,
                base_experience:  pokemon.base_experience,
                species: pokemon.species,
                types: pokemon.types,
                abilities: pokemon.abilities,
                stats: pokemon.stats,
                front_sprite: pokemon.front_sprite,
                back_sprite: pokemon.back_sprite,
                destination: props.destination
                }; 
                    
            axios.post('http://localhost/pokejs/next/src/pages/api/gamedb.php', obj)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error)
            }); 
            return null
        })
        if (props.setInitializedPokemon) {
            props.setInitializedPokemon(true)
        }
    }
}


// if its the first time running the post request to put pokemon in the pokemon database, change the obj vairable to:
//  const obj = {
    // name: pokemon.name,
    // moves: JSON.stringify(pokemon.moves),
    // base_experience:  pokemon.base_experience,
    // species: pokemon.species,
    // types: JSON.stringify(pokemon.types),
    // abilities: JSON.stringify(pokemon.abilities),
    // stats: JSON.stringify(pokemon.stats),
    // front_sprite: pokemon.front_sprite,
    // back_sprite: pokemon.back_sprite,
    // destination: props.destination
// };  
