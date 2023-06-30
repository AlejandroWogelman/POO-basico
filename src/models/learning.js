export class LearningPaths {
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
