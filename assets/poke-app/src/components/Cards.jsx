import { Box, Paper, Typography } from "@mui/material";

// component to display the list of Pokémon cards
const Cards = ({ pokemonData, onSelect }) => {
  return (
    <Box sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
        gap: 1,
        backgroundColor: "#1f1f1f",
        padding: "1rem",
        borderRadius: "8px",
        maxWidth: 600,
        margin: "0 auto",
      }}
    >
      {pokemonData.map((pokemonItem, index) => (
        <Paper
          key={index}
          onClick={() => onSelect(pokemonItem.url)}
          sx={{
            backgroundColor: "#3B3B3B",
            color: "white",
            padding: "0.5rem",
            cursor: "pointer",
            textAlign: "center",
            ":hover": {
              backgroundColor: "#555",
            },
          }}
        >
          <Typography>
            {pokemonItem.name.charAt(0).toUpperCase() + pokemonItem.name.slice(1)}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default Cards;