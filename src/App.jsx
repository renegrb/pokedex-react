import { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard';
import './App.css'

function App() {

  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then(response => response.json())
    .then(data => {
      setPokemones(data.results);
    });
  }, []);

  return (
    <div>
      <h1>Mi Pokedex</h1>

      {pokemones.map((pokemon, index) => (
        <p key={index}>{pokemon.name}</p>
      ))}

    </div>
  )
}

export default App