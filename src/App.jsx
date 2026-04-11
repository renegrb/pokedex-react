import { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard';
import PokemonDetail from './PokemonDetail';
import './App.css'

function App() {

  const [pokemones, setPokemones] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const [busqueda, setBusqueda] = useState("");

  const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null);

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
      })
      .catch(err => {
        console.error(err);
        setError("Hubo un error al cargar los Pokemon");
        setLoading(false);
      });
  }, []);

  const pokemonesFiltrados = pokemones.filter((poke) => {
    const nombre = poke.name.toLowerCase();
    const busquedaTexto = busqueda.toLowerCase();

    const coincideNombre = nombre.includes(busquedaTexto);
    const coincideID = poke.id.toString().includes(busquedaTexto);
    const coincideTipo = poke.types.some((t) =>
      t.type.name.toLowerCase().includes(busquedaTexto)
    );

    return coincideNombre || coincideID || coincideTipo;
  });

  return (
    <div>
      <h1>Mi Pokedex</h1>

      {error && <p>{error}</p>}
      {loading && <p>Cargando Pokedex...</p>}

      <input
        type="text"
        placeholder="Buscar Pokemon"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {pokemonSeleccionado && (
        <PokemonDetail
          pokemon={pokemonSeleccionado}
          onClose={() => setPokemonSeleccionado(null)}
        />
      )}

      <div className="container">
        {!loading && !error && pokemonesFiltrados.map((poke) => (
          <PokemonCard
            key={poke.id}
            nombre={poke.name}
            imagen={poke.sprites.front_default}
            tipo={poke.types[0].type.name}
            id={poke.id}
            onClick={() => setPokemonSeleccionado(poke)}
          />
        ))}
      </div>
    </div>
  )
}

export default App;