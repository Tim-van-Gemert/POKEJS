import { useEffect, useState } from "react";
import GetPokemon from "./getPokemon";
import DisplayPokemon from "./displayPokemon";

export default function ChooseStarter() { 
    const query = "SELECT * FROM pokemon WHERE name IN ('Charmander', 'Bulbasaur', 'Squirtle')"
    const [requestedPokemon, setRequestedPokemon] = useState()
    const [selectedStarter, setSelectedStarter] = useState()


    if (requestedPokemon == undefined) {
        return <GetPokemon query={query} setRequestedPokemon={setRequestedPokemon}/>
    }
    
    console.log(selectedStarter)

        return (
            <div className="w-screen h-screen min-w-screen min-h-screen bg-white flex justify-center items-center">
                <div className={` w-full sm:w-1/3 h-1/2 grid  ${selectedStarter != undefined ? 'flex justify-center items-top' : 'grid-cols-3'}`}>
                    {   
                        requestedPokemon.map((PM)=>{
                        return (
                            <DisplayPokemon name={PM.name} front_sprite={PM.front_sprite} selectedStarter={selectedStarter} setSelectedStarter={setSelectedStarter}/>
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
