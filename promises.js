//Callback = es una funcion que se le pasa como parametro
// a otra funcion.

function respuesta(res) {
  console.log(res);
}
function sumar(op1, op2, functionCallBack) {
  let resp = op1 + op2;
  functionCallBack(resp);
}
sumar(10, 20, respuesta);

//Promesas: SOn un objeto, por naturaleza son asincronas

/*
let promise = new Promise((res, rej) => {
  let estado = false;
  if (estado) {
    res("Resolvio Promesa");
  } else {
    rej("Se Rechazo la promesa");
  }
});

//opcion1
promise
  .then((valor) => console.log(valor))
  .catch((error) => console.log(error));
//opcion2
promise.then(
  (valor) => console.log(valor),
  (error) => console.log(error)
);

let promesa2 = new Promise((res) => {
  console.log("Inicio de Promesa2");
  setTimeout(() => {
    res("Resolvio Promesa2");
  }, 3000);
  console.log("Fin de Promesa2");
});
promesa2.then((valor) => console.log(valor));

*/

//async = indicarle a una funcion que regresa una promesa
//await = esperar el resultado de una promesa

async function funcionConAsync() {
  return "Ejemplo con async";
}

funcionConAsync().then((x) => console.log(x));

async function funcionConAsyncAwait() {
  console.log("Inicio");

  let promise = new Promise((res) => {
    setTimeout(() => {
      res("Resolvio promesa");
    }, 3000);
  });
  console.log(await promise);
  console.log("Fin");
}
funcionConAsyncAwait();
