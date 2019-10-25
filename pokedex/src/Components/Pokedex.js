import React, { useEffect } from "react";
import { connect } from "react-redux";

import Pokemon from "./Pokes";
import { fetchPokemon } from "../Actions/poke";
import styled  from 'styled-components'

const Div = styled.div`
  display: flex
  flex-direction: row
  width : 500px
  flex-wrap: wrap
  margin: 0 auto
`

const Pokedex = props => {
  useEffect(() => {
    props.fetchPokemon();
  }, [props]);

  return (
    <Div>
      {props.pokemon.map((pokemon, index) => {
        return <Pokemon pokemon={pokemon} url={pokemon.url} key={index} />;
      })}
    </Div>
  );
};

const mapStateToProps = state => {
  return {
    pokemon: state.pokemon
  };
};

export default connect(
  mapStateToProps,
  { fetchPokemon }
)(Pokedex);
