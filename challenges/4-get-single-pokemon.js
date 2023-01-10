const axios = require("axios");
const inquirer = require("inquirer");

//no pokemon between 19999 and 29999
const init = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "number",
        message:
          "Hello Pokemon Trainer! Please enter your pokemons ID to retrieve its details",
      },
    ])
    .then((answer) => {
      console.log(
        `Wow. Pokemon ${answer.number}! thats one of my favourites. You're a great trainer. Let me get the details, two seconds....`
      );
      return answer.number;
    })
    .catch((error) => {
      console.error(error);
    });
};

const getSinglePokemon = (pokemonId) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
    .then((response) => {
      const pokemonStats = {
        name: response.data.name,
        id: response.data.id,
        type: response.data.types[0].type.name,
      };
      console.log(pokemonStats);
    })
    .catch((error) => {
      // handle error
      console.log("Hey, sorry, that Pokemon doesn't exist");
      console.log(error);
    });
};

const handleFunctions = () => {
  init()
    .then((pokemonId) => {
      getSinglePokemon(pokemonId);
    })
    .catch((error) => {
      // console.error(error);
      return error;
    });
};

handleFunctions();
