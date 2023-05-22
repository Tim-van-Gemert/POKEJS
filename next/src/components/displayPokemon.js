import { useEffect, useState } from "react";
import GetPokemon from "./getPokemon";

export default function DisplayPokemon(props) {     
    return (
    <div key={`Pokemon: ${props.name}`} className="text-white group p-5 flex justify-center items-center flex-col">
        <img className="w-24 h-auto group-hover:-mt-10 mt-0  object-cover relative z-10 transition-all" src={props.front_sprite}></img>
        <div className="w-10 h-10 rounded-full -mt-12  relative z-0 shadow bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-300 via-gray-200 to-gary-100"></div>
    </div>
    )
}


// Put this line in the return statment to put 300 pokemon in the Pokemondb database.
// const [initializedPokemon, setInitializedPokemon] = useState(false)
// <InitPokemon setInitializedPokemon={setInitializedPokemon}/>
