let equipos = ["Medellin", "Nacional"];

for (let i = 0; i < equipos.length; i++) {
  console.log(equipos[i]);
}

equipos.forEach((equipo) => {
  console.log(equipo);
});

// Push - pop - shift son mutables

equipos.push("Envigado");
console.log(equipos);
equipos.pop();
console.log(equipos);
equipos.shift();
console.log(equipos);

//Inmutables Map - filter -reduce - some -every

let alumnos = ["ana", "juan", "pedro"];
alumnos.map((alumno) => {
  console.log(alumno);
});

let productos = [
  { name: "Libro", cost: 10 },
  { name: "Cuaderno", cost: 5 },
  { name: "Borrador", cost: 1 },
];

let nombrePdtos = productos.map((p) => p.name);
console.log(nombrePdtos);

let pdtosIVA = productos.map((p) => {
  return { ...p, iva: 19 };
});

console.log(pdtosIVA);

let FPC = [
  { nombre: "Nacional", ciudad: "Medellin", ligas: 17, libertadores: 2 },
  { nombre: "Medellin", ciudad: "Medellin", ligas: 10, libertadores: 0 },
  { nombre: "America", ciudad: "Cali", ligas: 15, libertadores: 0 },
  { nombre: "Cali", ciudad: "Cali", ligas: 11, libertadores: 0 },
  { nombre: "OnceCaldas", ciudad: "Manizales", ligas: 9, libertadores: 1 },
  { nombre: "Pasto", ciudad: "Pasto", ligas: 3, libertadores: 0 },
];

//Every (Todos cumplen - boolean)
let todosTieneLigas = FPC.every((eq) => eq.ligas > 0);
console.log(todosTieneLigas);

//Some (Alguno cumple - boolean)
let algunoTieneLibertadores = FPC.some((eq) => eq.libertadores > 0);
console.log(algunoTieneLibertadores);

//Filter
let gananLibertadores = FPC.filter((eq) => eq.libertadores > 0).map(
  (eq) => eq.nombre
);
console.log(gananLibertadores);

let gananLibertadoresCiudad = FPC.filter(
  (eq) => eq.libertadores > 0 && eq.ciudad === "Medellin"
).map((eq) => eq.nombre);
console.log(gananLibertadoresCiudad);

//Reduce

let totalLibertadores = FPC.filter((eq) => eq.libertadores > 0).reduce(
  (contador, eq) => (contador += eq.libertadores),
  0
);
console.log(totalLibertadores);
