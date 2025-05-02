import { Paper, Typography, Box } from "@mui/material";

// component to display the details of a single Pokémon
const CardDetail = ({ data }) => {
  return (
    <Paper 
      sx={{
        maxWidth: 300, 
        margin: "0 auto", 
        padding: "1.5rem", 
        backgroundColor: "#ddd", 
        borderRadius: "8px",
      }}
    >
      <Typography 
        variant="h6" 
        sx={{
          color: "#b59d00", 
          fontWeight: "bold", 
          mb: 2
        }}
      >
        {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
      </Typography>

      {/* pokémon image */}
      <Box sx={{mb: 2}}>
        <img src={data.sprites.front_default} alt={data.name} />
      </Box>

      <Typography>Height: {data.height}</Typography>
      <Typography>Weight: {data.weight}</Typography>
      <Typography>
        Type: {data.types.map((typeData) => typeData.type.name).join(", ")}
      </Typography>
    </Paper>
  );
};

export default CardDetail;