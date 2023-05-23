import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@/components/pokemonCard";
import GetPokemon from "../components/getPokemon";
import PostPokemon from "../components/postPokemon";
import InitPokemon from "./api/initialize/initPokemon";
import ChooseStarter from "@/components/chooseStarter";
import RetrieveSave from "@/components/retrieveSave";

export default function Home() { 
  // to be moved:
  const [currentSave, setCurrentSave] = useState(null)
  if (currentSave == null) {
    return (
      <RetrieveSave setCurrentSave={setCurrentSave} />
    )
  } else {
    switch (currentSave[0].checkpoint) {
      case "NewGame":
        return (
          <ChooseStarter/>
        )
        break;
      case "HasChosenStarter":
        return (
          <div className="text-white">Test</div>
        )
        break;
    }
  }

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