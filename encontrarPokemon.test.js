const axios = require('axios');
const { buscarPokemon } = require('./encontrarPokemon');

jest.mock('axios');

describe('Teste da função buscarPokemon', () => {
  it('Deve retornar o os dados do pokemon.', async () => {
    const data = {
      nome: 'Pikachu',
      poder: '33'
    };

    axios.get.mockResolvedValue({ data });

    const pokemon = await buscarPokemon('Pikachu');

    expect(pokemon).toEqual(data);
  });
});