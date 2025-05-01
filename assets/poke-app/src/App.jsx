import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
      const data = await response.json();
      setPokemonList(data.results);
    };
    fetchPokemon();
  }, []);

  return (
    <div className="App">
      <h1>Pokémon List</h1>
      <div className="cards">
        {pokemonList.map(p => (
          <button key={p.name} className="card">
            {p.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;