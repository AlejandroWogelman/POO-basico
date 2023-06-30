import { Comment } from "./comment.js";

export class Student {
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
  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    comment.publicar();
  }
}
