import { useEffect, useState } from "react";
import GetPokemon from "./getPokemon";

export default function DisplayStarterPokemon(props) {     
    return (
    <div key={`Pokemon: ${props.PM.name}`} className={`text-white group  hover:cursor-pointer p-3 ${props.selectedStarter == undefined ? 'opacity-100 flex' : props.selectedStarter.name == props.PM.name ? 'opacity-100 flex' : 'opacity-0 hidden'} flex h-[100px] p-5 w-fit transition-all justify-center items-center`} onClick={()=>{props.setSelectedStarter(props.PM)}}>
        <div className="w-fit h-fit relative flex items-center justify-center">
            <img className={`w-[100px] h-[100px] group-hover:-mt-10 mt-0 ${props.selectedStarter == undefined ? 'mt-0' : '-mt-10'}  object-cover relative z-10 transition-all`} src={props.front_sprite}></img>
            <div className="w-10 h-10 rounded-full  absolute sm:bottom-[10px] z-0 shadow bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-300 via-gray-200 to-gary-100"></div>
        </div>
    </div>
    )
}


// Put this line in the return statment to put 300 pokemon in the Pokemondb database.
// const [initializedPokemon, setInitializedPokemon] = useState(false)
// <InitPokemon setInitializedPokemon={setInitializedPokemon}/>
