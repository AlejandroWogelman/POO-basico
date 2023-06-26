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

  /*  this.aprobarCurso = function newCurso(curso) {
        this.cursosAprobados.push(curso)
    } */
}
Student.prototype.aprobarCurso = function newCurso(curso) {
  this.cursosAprobados.push(curso);
};

const juanita = new Student("juana", 18, [
  "Curso de introduccion a los videojuegos",
]);
console.log(juanita);
