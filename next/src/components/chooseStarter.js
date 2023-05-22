import { useEffect, useState } from "react";
import GetPokemon from "./getPokemon";
import DisplayPokemon from "./displayPokemon";

export default function ChooseStarter() { 
    const query = "SELECT * FROM pokemon WHERE name IN ('Charmander', 'Bulbasaur', 'Squirtle')"
    const [requestedPokemon, setRequestedPokemon] = useState()


    if (requestedPokemon == undefined) {
        return <GetPokemon query={query} setRequestedPokemon={setRequestedPokemon}/>
    }
    
    return (
        <div className="w-screen h-screen min-w-screen min-h-screen bg-white flex justify-center items-center">
            <div className="w-1/2 h-1/2 grid grid-cols-3 gap-12">
                {   
                    requestedPokemon.map((PM)=>{
                    return (
                        <DisplayPokemon name={PM.name} front_sprite={PM.front_sprite}/>
                        )
                    })
                }
            </div>
        </div>
    )
}


// Put this line in the return statment to put 300 pokemon in the Pokemondb database.
// const [initializedPokemon, setInitializedPokemon] = useState(false)
// <InitPokemon setInitializedPokemon={setInitializedPokemon}/>
