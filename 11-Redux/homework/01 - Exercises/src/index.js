const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento, imparIncrement, asyncIncrement } = require("./actions");
const { getExtension } = require("@11ty/eleventy/src/TemplatePath");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = getElementByID("valor")

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  const counter = store.getState().contador;
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  valor.innerHTML = counter;
}

// Ejecutamos la función 'renderContador':

renderContador();

// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.subscribe(renderContador);

// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:

var incrementobtn = getElementByID("incremento");
var decrementobtn = getElementByID("decremento");
var incrementoImparbtn = getElementByID("incrementoImpar");
var incrementoAsyncbtn = getElementByID("incrementoAsync");

incrementobtn.addEventListener("click", () => store.dispatch(incremento()));
decrementobtn.addEventListener("click", () => store.dispatch(decremento()));
incrementoImparbtn.addEventListener("click",
() => store.getState().contador % 2 != 0 && store.dispatch(imparIncrement ()));
incrementoAsyncbtn.addEventListener("click", () => setTimeout(() => store.dispatch(asyncIncrement()), 2000));


