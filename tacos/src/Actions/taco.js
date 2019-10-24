import axios from 'axios'

export const GET_TACO = 'GET_TACO'
export const EAT_TACO = 'EAT_TACO'
export const DROPPED_TACO = 'DROPPED_TACO'

export function fetchTaco() {
    return dispatch => {
        dispatch({type: GET_TACO})

    axios.get('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
    .then(res=> {
        dispatch({type: EAT_TACO, payload: res.data})
    })
    .catch(err => {dispatch({type: DROPPED_TACO, payload: err})})
    }
}