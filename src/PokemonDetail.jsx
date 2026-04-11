function PokemonDetail({ pokemon, onClose }) {

    // Número máximo en las estadiscticas (en detalle)
    const MAX_STAT = 255;

    return (
        <div className='detalle'>
          <h2>{pokemon.name}</h2>

          <img src={pokemon.sprites.front_default} alt={pokemon.name} />

          <p>ID: {pokemon.id}</p>

          <p>Tipos:</p>
          <ul>
            {pokemon.types.map((t) => (
              <li key={t.type.name}>{t.type.name}</li>
            ))}
          </ul>

          <p>Altura: {pokemon.height}</p>

          <p>Peso: {pokemon.weight}</p>

          <p>Stats:</p>
          <ul>
            {pokemon.stats.map((s) => (
              <li key={s.stat.name}>
                <p>{s.stat.name}: {s.base_stat}</p>
                <div className='barra'>
                  <div
                    className='progreso'
                    style={{ width: `${(s.base_stat / MAX_STAT) * 100}%` }}
                  >
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <button onClick={onClose} style={{ cursor: "pointer" }}> Cerrar </button>

        </div>
    );
}

export default PokemonDetail;