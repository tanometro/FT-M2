import { INCREMENT, DECREMENT, IMPAR, ASYNC, INCREMENTRANDOM } from '../actions';

const initialState = {
  count: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?
export default function contador (state = initialState, action) {
  switch (action.type) {
    case INCREMENT: 
    return {
      ...state,
      count: state.count + 1
    };
    // completa para este caso
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    // Fill para este otro
    case IMPAR:
      return {
        ...state,
        count: state.count + 1
      };
    case ASYNC:
      return {
        ...state,
        count: state.count + 1
      };
    case INCREMENTRANDOM:
      return {
        ...state,
        count: state.count + action.payload,
      }
    default:
      return state;
  }
};