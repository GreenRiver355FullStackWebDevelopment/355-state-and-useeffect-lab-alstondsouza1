
// component to display detailed information about a selected Pokémon
const CardDetail = ({ pokemon }) => {
  return (
    <div className="card-detail">

      {/* display Pokémon name */}
      <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>

      {/* display Pokémon image */}
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

      {/* display basic pokemon stats */}
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Type: {pokemon.types.map(t => t.type.name).join(", ")}</p>
    </div>
  );
};

export default CardDetail;