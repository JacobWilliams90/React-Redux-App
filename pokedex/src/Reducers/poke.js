import { POKE_START, POKE_CATCH, POKE_ESCAPE } from "../Actions/poke";

const initialState = {
  pokemon: [],
  error: "",
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POKE_START:
      return {
        ...state,
        isFetching: true
      };

    case POKE_CATCH:
      return {
        ...state,
        pokemon: action.payload.results,
        isLoading: false
      };

    case POKE_ESCAPE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
