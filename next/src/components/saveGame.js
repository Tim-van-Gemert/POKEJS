import { useEffect, useState } from "react";
import GetPokemon from "./getPokemon";
import DisplayStarterPokemon from "./displayPokemon";
import PostPokemon from "@/components/postPokemon";
import axios from "axios";

export default function SaveGame(props) { 
        const obj = {
                checkpoint:  props.currentSave.checkpoint,
                team:  JSON.stringify(props.currentSave.team),
                badges: JSON.stringify(props.currentSave.badges),
                storedPokemon: JSON.stringify(props.currentSave.badges),
            }; 
        console.log(obj)

        axios.post('http://localhost/pokejs/next/src/pages/api/savesdb.php', obj)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error)
        }); 
        return null
}


// Put this line in the return statment to put 300 pokemon in the Pokemondb database.
// const [initializedPokemon, setInitializedPokemon] = useState(false)
// <InitPokemon setInitializedPokemon={setInitializedPokemon}/>
