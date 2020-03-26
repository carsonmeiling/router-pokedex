import React from 'react';
import Pokemon from './Pokemon';


const Pokelist = ({ pokemons, updatePokemon }) => (
  <>
    {
      pokemons.map( p => 
        <Pokemon
          {...p}
          updatePokemon={updatePokemon}
        />
        )
    }
  </>

)

export default Pokelist;