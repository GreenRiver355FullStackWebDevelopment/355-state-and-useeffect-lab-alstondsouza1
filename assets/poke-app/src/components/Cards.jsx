import { useState } from "react";
import CardDetail from "../components/CardDetail.jsx";

const Cards = ({ pokemonList }) => {
  const [pokemon, setPokemon] = useState(null);

  // function to fetch and set the selected Pokémon details
  const onPokemonClick = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setPokemon(data); // update state with fetched Pokémon data
  };

  return (
    <div className="cards-wrapper">
      <div className="cards">
        {pokemonList.map((p) => (
          <div
            key={p.name}
            className="card"
            onClick={() => onPokemonClick(p.url)} // fetch Pokémon details on click
          >
            {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
          </div>
        ))}
      </div>

       {/* show Pokémon details when a card is clicked */}
      {pokemon && <CardDetail pokemon={pokemon} />}
    </div>
  );
};

export default Cards;