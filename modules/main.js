import Animal from "./Animal.js";
import validarToken, { API_KEY, PERFILES } from "./helpers.js";
//import validarToken, * as helper from "./helpers.js";

const prueba = new Animal("leon");
console.log(prueba.print());
console.log(validarToken());
console.log(API_KEY);
console.log(PERFILES[0]);
