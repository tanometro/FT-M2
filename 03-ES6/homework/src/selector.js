var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  
  resultSet.push()
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if(selector[0] === "#") return 'id'
  else if(selector[0] === ".") return 'class'
  else if(selector.includes(".")) return 'tag.class'
  return 'tag'
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    //matchFunction = function(elemento){
      //return "#" + elemento.id === selector Una forma de hacer 
      //return `#${elemento.id}` === selector; //Otra forma de hacer
      matchFunction = elemento => `#${elemento.id}` === selector // ECMAScript 
    } 
  else if (selectorType === "class") {
    //matchFunction = (elemento) => {
      //for(let i = 0; i < elemento.classList.length; i++){
        //if(`.${elemento.classList}`=== selector) return true
    //   }
    //   return false;
    // }
    matchFunction = elemento => elemento.classList.contains(selector.substring(1));
  } else if (selectorType === "tag.class") {
    let parts = selector.split(".");
    let tagName = parts[0];
    let classList = parts[1];
    matchFunction = function(elemento) {
      return elemento.tagName.toLowerCase()  == tagName && elemento.classList.contains(className);
    }
  } else if (selectorType === "tag") {
    matchFunction = (elemento) => elemento.tagName.toLowerCase() == selector;
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
