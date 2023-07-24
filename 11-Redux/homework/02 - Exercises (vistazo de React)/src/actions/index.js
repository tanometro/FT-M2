export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ASYNC = "ASINCRONO";
export const IMPAR = "IMPAR";
export const INCREMENTRANDOM = "INCREMENTRANDOM";
// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

export const increment = () => {
  return {
    type: INCREMENT
  }
};

export const decrement = () => {
  // Completa la funcion
  return {
    type: DECREMENT
  }
};

export const asincrono = () => {
return {
  type: ASYNC
}
}

export const impar = () => {
  return {
    type: IMPAR
  }
}

export const incrementRandom = () => {
  let numRandom = Math.round(Math.random() * 3);
  return {
    type: INCREMENTRANDOM ,
    payload: numRandom,
  }
}