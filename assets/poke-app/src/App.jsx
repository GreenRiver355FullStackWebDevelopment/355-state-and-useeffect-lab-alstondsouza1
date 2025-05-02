import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
      const data = await res.json();
      setPokemonList(data.results);
    };
    fetchPokemon();
  }, [offset]);

  const handleNext = () => setOffset((prev) => prev + 20);
  const handleBack = () => {
    if (offset >= 20) setOffset((prev) => prev - 20);
  };

  return (
    <div className="App">
      <h1>Pokémon List</h1>
      <Cards pokemonList={pokemonList} />
      <div className="pagination">
        <button onClick={handleBack} disabled={offset === 0}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;