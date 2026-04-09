import { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard';
import './App.css'

function App() {

  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then(response => response.json())
      .then(data => {

        const promises = data.results.map(pokemon =>
          fetch(pokemon.url)
            .then(response => response.json())
        );

        return Promise.all(promises);
      })
      .then(results => {
        setPokemones(results);
      });
  }, []);

  return (
    <div>
      <h1>Mi Pokedex</h1>

      {pokemones.map((poke) => (
        <PokemonCard
          key={poke.id}
          nombre={poke.name}
          imagen={poke.sprites.front_default}
          tipo={poke.types[0].type.name}
          id={poke.id}
        />
      ))}

    </div>
  )
}

export default App