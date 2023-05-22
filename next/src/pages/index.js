import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@/components/pokemonCard";
import GetPokemon from "../components/getPokemon";
import PostPokemon from "./api/initialize/postPokemon";
import InitPokemon from "./api/initialize/initPokemon";
import ChooseStarter from "@/components/chooseStarter";

export default function Home() { 
  return (
      <ChooseStarter/>
  )
}


// Put this line in the return statment to put 300 pokemon in the Pokemondb database.
// const [initializedPokemon, setInitializedPokemon] = useState(false)
// <InitPokemon setInitializedPokemon={setInitializedPokemon}/>


// return (
//   <div className="w-screen h-screen min-w-screen min-h-screen grid grid-cols-6">
//     {
//     parsedPokemon.map((PM)=> {
//       return (
//         <div className="text-white p-5">
//           <img className="w-28 h-28" src={PM.front_sprite}></img>
//         </div>
//       )
//     })
//     }
//   </div>
// )   