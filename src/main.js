const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso definitivo de html y css",
    "Curso practico de html y css",
  ],
  aprobarCurso(curso) {
    this.cursosAprobados.push(curso);
  },
};
natalia.cursosAprobados.push("Curso de responsive");
natalia.aprobarCurso("Curso de objetos");
console.log(natalia);

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
}
Student.prototype.aprobarCurso = function newCurso(curso) {
  this.cursosAprobados.push(curso);
};

const juanita = new Student("juana", 18, [
  "Curso de introduccion a los videojuegos",
]);
console.log(juanita);

// Prototipos con la sintaxis de Clases

class Student2 {
  constructor({ name, age, cursosAprobados = [] }) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }

  aprobarCurso(curso) {
    this.cursosAprobados.push(curso);
  }
}
const ale = new Student2({
  name: "Ale",
  age: 27,
  cursosAprobados: ["Javascript de 0-100"],
});
ale.aprobarCurso("Poo básico");
console.log(ale);
