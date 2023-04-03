import './App.css';
import axios from "axios"
import React, {useEffect, useState} from "react"

function App() {
  const [pokeapi, setPokeApi] = useState([])
  useEffect(() => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=807")
    .then((response) => {
    console.log(response.data.results)
    setPokeApi(response.data.results);
  })
    .catch((err) => console.log(err))
    
  }, [])
  return (
    <div className="App">
      {pokeapi.map((pokemon, idx) =>(
        <ul>
          <li key={idx}>
          {pokemon.name}
          </li>
        </ul>
      ))}



    </div>
  );
}

export default App;
