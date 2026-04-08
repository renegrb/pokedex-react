import { useEffect } from "react";

function PokemonCard(props) {

    return (

        <div>
            <h3>Nombre: {props.nombre}</h3>
            <p>ID: {props.id}</p>
            <p>Tipo: {props.tipo}</p>
        </div>
    );
}

export default PokemonCard;