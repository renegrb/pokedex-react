import { useEffect } from "react";

function PokemonCard(props) {

    return (

        <div>
            <h3>{props.nombre}</h3>
            <img src={props.imagen}/>
            <p>ID: {props.id}</p>
            <p>Tipo: {props.tipo}</p>
        </div>
    );
}

export default PokemonCard;