import { useEffect } from "react";

function PokemonCard(props) {

    return (

        <div className="card">
            <img src={props.imagen} alt={props.nombre}/>
            <h3>{props.nombre}</h3>
            <p>ID: {props.id}</p>
            <p>Tipo: {props.tipo}</p>
        </div>
    );
}

export default PokemonCard;