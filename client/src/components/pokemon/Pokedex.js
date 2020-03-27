import React, { Component } from 'react';
import axios from 'axios';
import Pokelist from './Pokelist';
import PokeForm from './PokeForm';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  state = { pokemons: []}

  componentDidMount() {
    axios.get('/api/pokemons')
      .then( res => {
        this.setState({ pokemons: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  addPokemon = ( pokemon ) => {
    axios.post('/api/pokemons', { pokemon })
      .then( res => {
        const { pokemons } = this.state
        this.setState({ pokemons: [...pokemons, res.data]})
      })
      .catch( err => {
        console.log(err)
      })
  }

  updatePokemon = (id, pokemon) => {
    axios.put(`/api/pokemons/${id}`, { pokemon })
      .then( res => {
        const pokemons = this.state.pokemons.map( p => {
          if (p.id === id){
            return res.data
          } 
          return p
        })
        this.setState({ pokemons })
      })
      .catch( err => {
        console.log(err)
      })
  }

  deletePokemon = (id) => {
    axios.delete(`/api/pokemons/${id}`)
    .then( res => {
      const { pokemons } = this.state
      this.setState({ pokemons: pokemons.filter( p => p.id !== id )})
    })
    .catch( err => {
      console.log(err)
    })
  }

  render (){
    const { pokemons } = this.state
    return(
      <>
      <h1>Pokedex</h1>
      <PokeForm addPokemon={this.addPokemon} />
      <Pokelist 
      pokemons={pokemons} 
      updatePokemon={this.updatePokemon}
      deletePokemon={this.deletePokemon}
      />
      </>
    )
  }
}

export default Pokedex;