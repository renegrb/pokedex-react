import { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard';
import './App.css'

function App() {

  const [pokemones, setPokemones] = useState([]);

  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Mi Pokedex</h1>

      {loading && <p>Cargando Pokedex</p>}

      {!loading && pokemones.map((poke) => (
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