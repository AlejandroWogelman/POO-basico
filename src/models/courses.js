export class Course {
  constructor({ name, classes = [], isFree = false, lang = "es" }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  get name() {
    return this._name;
  }
  set name(nuevoNombre = "") {
    if (nuevoNombre.length > 3) {
      this._name = nuevoNombre;
    }
  }
}
