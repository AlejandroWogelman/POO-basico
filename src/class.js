const juan = {
  name: "Juan",
  username: "juandc",
  points: 100,
  socialMedia: {
    twitter: "",
    instagram: "",
    facebook: "",
  },
  approvedCourses: ["html", "css"],
  learningPaths: [
    { name: "Escuela dev", courses: ["js", "ts"] },
    { name: "Escuela back", courses: ["node"] },
  ],
};

class LearningPaths {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
  addLearning(name, courses) {
    this.learningPaths.push({ name, courses });
  }
  actualiceCourses(schoolName, newCourse) {
    const school = this.learningPaths.find((school) =>
      school.hasOwnProperty(schoolName)
    );
    if (school) {
      school.courses.push(newCourse);
    }
  }
}
const escuelaWeb = new LearningPaths({
  name: "EscuelaWeb",
  courses: ["React"],
});

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const ale2 = new Student({
  name: "Ale2",
  username: "aleww",
  email: "Ale@ale.com",
  learningPaths: [escuelaWeb],
});

console.log(ale2);

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
