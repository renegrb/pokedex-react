function PokemonDetail({ pokemon, onClose }) {

  // Número máximo en las estadiscticas (en detalle)
  const MAX_STAT = 255;

  const coloresTipos = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD"
  };

  function esColorClaro(hex) {
    const color = hex.replace("#", "");

    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);

    const brillo = (r * 299 + g * 587 + b * 114) / 1000;

    return brillo > 155;
  }

  const colorFondo = coloresTipos[pokemon.types[0].type.name] || "gray";

  const colorTexto = esColorClaro(colorFondo) ? "black" : "white";

  return (
    <div className='detalle'
      style={{
        backgroundColor: colorFondo,
        padding: "20px",
        borderRadius: "10px",
        color: colorTexto
      }}
    >
      <h2>{pokemon.name}</h2>

      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

      <p>ID: {pokemon.id}</p>

      <p>Tipos:</p>
      <ul>
        {pokemon.types.map((t) => {
          const colorTipo = coloresTipos[t.type.name] || "gray";
          const textoTipo = esColorClaro(colorTipo) ? "black" : "white";

          return (
            <li key={t.type.name}
              style={{
                backgroundColor: colorTipo,
                color: textoTipo,
                padding: "5px 10px",
                borderRadius: "10px",
                display: "inline-block",
                marginRight: "5px"
              }}
            >{t.type.name}</li>
          )
        })}
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