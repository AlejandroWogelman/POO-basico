/* Usando el set de la propiedad name valida siempre que se le quiera asignar un valor lo siguiente:

Que sea de tipo string.
Si es string convierte la primera letra de cada palabra del nombre en mayúsculas
Si no es un string no se cambia el valor de la propiedad name. */

export class Course {
  constructor({ name, classes = [] }) {
    this._name = name;
    this.classes = classes;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (typeof nuevoNombrecito === "string") {
      const capitalize = nuevoNombrecito.split(" ").map((e) => {
        const first_char = e.charAt(0).toUpperCase();
        const rest = e.slice(1);
        return first_char.concat(rest);
      });
      this._name = capitalize.join(" ");
    }
  }
}

const curso = new Course({ name: "Typescript moderno" });
curso.name = "curso de programación básica";
console.log(curso.name);
