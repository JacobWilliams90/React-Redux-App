import axios from "axios";

export const POKE_START = "POKE_START";
export const POKE_CATCH = "POKE_CATCH";
export const POKE_ESCAPE = "POKE_ESCAPE";

export const fetchPokemon = props => dispatch => {
  dispatch({ type: POKE_START });
  axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then(res => {
      dispatch({
        type: POKE_CATCH,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: POKE_ESCAPE, payload: err.response });
    });
};

export default fetchPokemon;
