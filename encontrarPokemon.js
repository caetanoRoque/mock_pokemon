const axios = require('axios');

async function buscarPokemon(pokemon) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    return response.data;
  } catch (error) {
    throw new Error('Não foi possível encontrar o Pokemon.');
  }
}

// Exemplo de uso da função buscarEndereco
buscarPokemon('pikachu')
  .then(pokemon => console.log(pokemon))
  .catch(error => console.error(error.message));

module.exports = {
    buscarPokemon
}