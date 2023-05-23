import { useEffect, useState } from "react";
import axios from "axios";

export default function RetrieveSave (props) {

    const [latestSave, setLatestSave] = useState();
    
    useEffect(() => {
      const url = 'http://localhost/pokejs/next/src/pages/api/savesdb.php';
      axios.get(url, {
        params: {
          query: "SELECT * FROM saves ORDER BY id DESC LIMIT 1; "
        }
      })
      .then(response => response.data)
      .then(data => {
        if (data != undefined) {  
          return setLatestSave(data)
        }
      })
      .catch(error => {
        console.error(error);
      });``
    }, []);
    
    console.log(latestSave)
}

