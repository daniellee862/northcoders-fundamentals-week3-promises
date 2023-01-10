const axios = require("axios");

axios
  .get("https://pokeapi.co/api/v2/pokemon")
  .then((response) => {
    // handle success
    const pokemonData = response.data.results;
    console.log(pokemonData);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  });
