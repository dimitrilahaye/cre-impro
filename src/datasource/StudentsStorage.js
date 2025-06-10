import generateUUID from "../utils/uuid";

export default class StudentsStorage {
  constructor(storage) {
    this.storage = storage;
  }

  getAll() {
    return this.storage.get("students").sort((a, b) => a.value.localeCompare(b.value)) ?? [];
  }

  add(student) {
    this._add({
      id: generateUUID(),
      value: student.trim(),
    });
  }

  _add(student) {
    const students = this.getAll() ?? [];
    students.push({
      ...student,
      impro: student.impro ?? [],
    });
    this.storage.set("students", students);
  }

  addImproToStudent(impro, studentId) {
    const students = this.getAll() ?? [];
    const student = students.find((student) => student.id === studentId);
    if (!student) {
      return;
    }
    student.impro = impro;
    this.delete(studentId);
    this._add(student);
  }

  delete(studentId) {
    const students = this.getAll() ?? [];
    if (students.length === 0) {
      return;
    }
    const newMoods = students.filter((student) => student.id !== studentId);
    this.storage.set("students", newMoods);
  }

  clearAll() {
    this.storage.remove("students");
  }
}
