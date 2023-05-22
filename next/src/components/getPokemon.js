import { useEffect, useState } from "react";
import axios from "axios";

export default function GetPokemon (props) {

    const [pokemon, setPokemon] = useState('');
    useEffect(() => {
      const url = 'http://localhost/pokejs/next/src/pages/api/db.php';
      axios.get(url, {
        params: {
          query: props.query
        }
      })
      .then(response => response.data)
      .then(data => {
        if (data != undefined) {
          return props.setRequestedPokemon(eval(data))
        }
      })
      .catch(error => {
        console.error(error);
      });``
    }, []);
    
}

