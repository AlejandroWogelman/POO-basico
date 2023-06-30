class Banda {
  constructor({ nombre, generos = [] }) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
  }
  agregarIntegrante(integranteNuevo) {
    // Tu código aquí 👈
    //Evitamos integrante con mismo instrumento
    !this.integrantes.some((i) => i.instrumento === integranteNuevo.instrumento)
      ? this.integrantes.push(integranteNuevo)
      : null;
  }
}

//Crear clase Integrante
class Integrante {
  // Tu código aquí 👈
  constructor({ nombre, instrumento }) {
    this.nombre = nombre;
    this.instrumento = instrumento;
  }
}

const data = {
  nombre: "Los Jacks",
  generos: ["rock", "pop", "post-punk"],
  integrantes: [],
};
const banda = new Banda(data);
banda.agregarIntegrante(
  new Integrante({ nombre: "Erik", instrumento: "Guitarra" })
);
banda.agregarIntegrante(
  new Integrante({ nombre: "Paul", instrumento: "Bateria" })
);
banda.agregarIntegrante(
  new Integrante({ nombre: "Paul", instrumento: "Bateria" })
);
console.log(banda);
