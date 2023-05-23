import { useEffect, useState } from "react";
import GetPokemon from "./getPokemon";
import DisplayStarterPokemon from "./displayPokemon";
import PostPokemon from "@/components/postPokemon";

export default function ChooseStarter(props) { 
    const query = "SELECT * FROM pokemon WHERE name IN ('Charmander', 'Bulbasaur', 'Squirtle')"
    const [requestedPokemon, setRequestedPokemon] = useState()
    const [selectedStarter, setSelectedStarter] = useState()
    const [confirmed, setConfirmed] = useState()


    if (requestedPokemon == undefined) {
        return <GetPokemon query={query} setRequestedPokemon={setRequestedPokemon}/>
    }

    if (confirmed != undefined) {
        <PostPokemon pokemonDataArray={[selectedStarter]} destination={'team'}/> 
        return props.setHasChosenStarter(true);
    }
    
    console.log(selectedStarter)

        return (
            <div className="w-screen h-screen min-w-screen min-h-screen bg-white flex flex-col justify-top pt-10 items-center">
                <p className=" text-black text-center w-full p-5">{ selectedStarter != undefined ? `Are you sure you want ${selectedStarter.name} as your stater?` : 'Choose your first pokemon!'  }</p>
                <div className={` w-full  sm:w-1/3 h-1/2 grid  ${selectedStarter != undefined ? 'flex  h-fit justify-center flex-col items-top' : 'grid-cols-3'}`}>
                    {   
                        requestedPokemon.map((PM)=>{
                        return (
                            <DisplayStarterPokemon PM={PM} front_sprite={PM.front_sprite} selectedStarter={selectedStarter} setSelectedStarter={setSelectedStarter}/>
                            )
                        })
                    }
                </div>
                <div className={` text-black  ${ selectedStarter != undefined ? 'flex' : 'hidden'}  justify-center  gap-4  flex-col items-center w-1/3 `}>
                    <div className="flex flex-row w-1/3 justify-between">
                        <button onClick={()=>{setConfirmed(selectedStarter)}} className="bg-gray-100 p-5 uppercase rounded-xl">YES</button>
                        <button onClick={()=>{setSelectedStarter(undefined)}} className="bg-gray-100 p-5 uppercase rounded-xl">NO</button>
                    </div>
                </div>
            </div>
        )


}


// Put this line in the return statment to put 300 pokemon in the Pokemondb database.
// const [initializedPokemon, setInitializedPokemon] = useState(false)
// <InitPokemon setInitializedPokemon={setInitializedPokemon}/>
