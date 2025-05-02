import "./App.css"; 
import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import CardDetail from "./components/CardDetail";
import { Box, Typography } from "@mui/material";

function App() {

  // stating the variables
  const [pokemonData, setPokemonData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  // fetching the data from the API
  const loadPokemons = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
    const data = await res.json();
    setPokemonData(data.results);
  };

  // fetching the data of a single pokemon
  const getSinglePokemon = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setSelectedPokemon(data);
  };

  useEffect(() => {
    loadPokemons();
  }, [offset]);
  
  return (
    <Box sx={{ textAlign: "center", padding: "2rem" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "white", mb: 2 }}>
        Pokémon List
      </Typography>

      {/* pokémon card grid */}
      <Cards pokemonData={pokemonData} onSelect={getSinglePokemon} />

      {/* pagination buttons */}
      <Box sx={{ mt: 2 }}>
        <button
          onClick={() => setOffset((prev) => Math.max(prev - 20, 0))}
          disabled={offset === 0}
          style={{
            backgroundColor: "#4B5563",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            marginRight: "1rem",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Back
        </button>
        <button
          onClick={() => setOffset((prev) => prev + 20)}
          style={{
            backgroundColor: "yellow",
            color: "black",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Next
        </button>
      </Box>

      {selectedPokemon && (
        <Box sx={{ mt: 4 }}>
          <CardDetail data={selectedPokemon} />
        </Box>
      )}
    </Box>
  );
}

export default App;