import { escuelaWeb } from "./class.js";
import { Comment } from "./models/comment.js";
import { Student } from "./models/students.js";

/*  EXTENSION DE CLASES HEREDANDO LAS PROPIEDADES */

export class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        `Lo sentimos, ${this.name} solo puedes tomar cursos abiertos`
      );
    }
  }
}
export class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    if (newCourse.lang !== "es") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        `Lo sentimos, ${this.name} no puedes tomar cursos en inglés`
      );
    }
  }
}
export class PremiumStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

/* 
    WORK

import { Comment } from "./Comment";
import { Student } from "./Student";

export class TeacherStudent extends Student {
  constructor(props, skills) {
    super(props);
    this.skills = skills;
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "profesor de " + this.skills,
    });
    return comment.publicar();
  }
}
 */
