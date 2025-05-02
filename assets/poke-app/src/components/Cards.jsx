import { useState } from "react";
import CardDetail from "../components/CardDetail.jsx";

const Cards = ({ pokemonList }) => {
  const [pokemon, setPokemon] = useState(null);

  const onPokemonClick = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setPokemon(data);
  };

  return (
    <div className="cards">
      {pokemonList.map((p) => (
        <div
          key={p.name}
          className="card"
          onClick={() => onPokemonClick(p.url)}
        >
          {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
        </div>
      ))}
      {pokemon && <CardDetail pokemon={pokemon} />}
    </div>
  );
};

export default Cards;