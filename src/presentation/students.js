export default class Students {
  constructor(storage, improCreator) {
    this.storage = storage;
    this.improCreator = improCreator;
    this.$tabContents = document.querySelector("#tab-contents");
    this._initializeContent();
  }

  _initializeContent() {
    const students = this.storage.getAll();
    this.$tabContents.innerHTML = `
        <div class="tab-content active">
            <div id="student-list">${
              students.length === 0 ? "Tu n'as pas encore d'élèves" : ""
            }</div>
            <div class="field has-addons">
                <div class="control">
                    <input id="student-field" class="input" type="text" placeholder="Ex: Léa">
                </div>
                <div class="control">
                    <button id="add-student" class="button is-danger">
                        <span class="icon is-small">
                            <i class="fa-solid fa-plus"></i>
                        </span>
                    </button>
                </div>
            </div>
            ${
              students.length > 0
                ? `
                <button id="clear-all" class="button is-danger">
                  <span>Tout supprimer</span>
                  <span class="icon is-small">
                      <i class="fa-solid fa-trash"></i>
                  </span>
                </button>
                <button id="create-all" class="button is-success">
                  <span>Créer une impro pour tout le monde</span>
                  <span class="icon is-small">
                      <i class="fa-solid fa-wand-magic-sparkles"></i>
                  </span>
                </button>
            `
                : ""
            }
        </div>    
    `;
    setTimeout(() => {
      this.$studentList = document.querySelector("#student-list");
      this.$addStudent = document.querySelector("#add-student");
      this.$studentField = document.querySelector("#student-field");
      this.$clearAll = document.querySelector("#clear-all");
      this.$createImproAll = document.querySelector("#create-all");
      this.$addStudent.addEventListener("click", () => {
        const student = this.$studentField.value;
        if (student?.trim().length === 0) {
          return;
        }
        this.storage.add(student);
        this._initializeContent();
      });
      if (this.$clearAll) {
        this.$clearAll.addEventListener("click", () => {
          this.storage.clearAll();
          this._initializeContent();
        });
      }
      if (this.$createImproAll) {
        this.$createImproAll.addEventListener("click", () => {
          this._createImpro();
        });
      }
      this._displayStudents();
    }, 50);
  }

  _displayStudents() {
    const students = this.storage.getAll();
    for (const student of students) {
      this.$studentList.insertAdjacentHTML(
        "beforeend",
        `
            <div id="${student.id}" class="config">
                <div class="general">
                  <span>${student.value}</span>
                  <div>
                    <button class="button is-success create-impro">
                        <span class="icon is-small">
                            <i class="fa-solid fa-wand-magic-sparkles"></i>
                        </span>
                    </button>
                    <button class="button is-danger delete-student">
                        <span class="icon is-small">
                            <i class="fa-solid fa-trash"></i>
                        </span>
                    </button>
                  </div>
                </div>
                ${
                  student.impro.length === 0
                    ? ""
                    : `<div class="general impros">
                  ${student.impro
                    .map((impro, index) => {
                      let title;
                      if (index === 0) {
                        title = "Émotion";
                      }
                      if (index === 1) {
                        title = "Lieu";
                      }
                      if (index === 2) {
                        title = "Personnage";
                      }
                      return `
                      <div><strong>${title}</strong>: ${impro}</div>
                    `;
                    })
                    .join("")}
                </div>`
                }
            </div>
        `
      );
    }
    setTimeout(() => {
      const deleteButtons = document.querySelectorAll(".delete-student");
      for (const $button of deleteButtons) {
        $button.addEventListener("click", (event) => {
          const $closest = event.target.closest(".delete-student");
          if (!$closest) {
            return;
          }
          const configDiv = $closest.closest(".config");
          const studentId = configDiv.id;
          this.storage.delete(studentId);
          this._initializeContent();
        });
      }

      const createImproButtons = document.querySelectorAll(".create-impro");
      for (const $button of createImproButtons) {
        $button.addEventListener("click", (event) => {
          const $closest = event.target.closest(".create-impro");
          if (!$closest) {
            return;
          }
          const configDiv = $closest.closest(".config");
          const studentId = configDiv.id;
          const impro = this.improCreator.create();
          this.storage.addImproToStudent(impro, studentId);
          this._initializeContent();
        });
      }
    }, 50);
  }

  _createImpro() {
    const createImproButtons = document.querySelectorAll(".create-impro");
    for (const $button of createImproButtons) {
      const $closest = $button.closest(".create-impro");
      if (!$closest) {
        return;
      }
      const configDiv = $closest.closest(".config");
      const studentId = configDiv.id;
      const impro = this.improCreator.create();
      this.storage.addImproToStudent(impro, studentId);
    }
    this._initializeContent();
  }
}
