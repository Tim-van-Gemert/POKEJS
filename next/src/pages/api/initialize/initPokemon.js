import { useState, useEffect } from 'react';
import axios from 'axios';
import PostPokemon from '../../../components/postPokemon';

export default function InitPokemon(props) {
  const [pokemonDataArray, setPokemonDataArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=300&offset=0');
      const data = response.data;

      const pokemonDataArray = data.results.map(async (pokemon) => {
        const response = await axios.get(pokemon.url);
        const pokemonData = response.data;

        return {
          name: pokemonData.name,
          moves: pokemonData.moves,
          base_experience: pokemonData.base_experience,
          species: pokemonData.species,
          types: pokemonData.types,
          abilities: pokemonData.abilities,
          stats: pokemonData.stats,
          front_sprite: pokemonData.sprites.front_default,
          back_sprite: pokemonData.sprites.back_default,
        };
      });

      const resolvedPokemonDataArray = await Promise.all(pokemonDataArray);
      setPokemonDataArray(resolvedPokemonDataArray);
    };

    fetchData();
  }, []);

  return (
    <PostPokemon setInitializedPokemon={props.setInitializedPokemon} destination={'pokemon'} pokemonDataArray={pokemonDataArray}/>
  );
}
