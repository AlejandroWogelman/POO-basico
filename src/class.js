import { FreeStudent, TeacherStudent } from "./herencia.js";
import { Course } from "./models/courses.js";
import { LearningPaths } from "./models/learning.js";

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

const cursoProgBasica = new Course({
  name: "Programacion Básica gratis",
  isFree: true,
});
const cursoDefinitivoHtml = new Course({
  name: "Curso definitivo de HTML",
});
const cursoPracticoHtml = new Course({
  name: "Curso práctico de HTML",
  lang: "en",
});

console.log(cursoProgBasica.name);
// GET
cursoProgBasica.name = "Curso MEGA práctico de HTML";
// SET
console.log(cursoProgBasica.name);

export const escuelaWeb = new LearningPaths({
  name: "Escuela de Desarrollo Web",
  courses: [cursoProgBasica, cursoDefinitivoHtml, cursoPracticoHtml],
});

const ale2 = new FreeStudent({
  name: "Ale2",
  username: "aleww",
  email: "Ale@ale.com",
  learningPaths: [escuelaWeb],
});

ale2.approveCourse(escuelaWeb);
ale2.publicarComentario("Muy bueno");

const fredy = new TeacherStudent({
  name: "Freddy",
  username: "Fg",
  email: "ejemplo@ejemplo.com",
  learning: [escuelaWeb],
});
fredy.publicarComentario("Me encantó");

console.log(fredy, ale2);
