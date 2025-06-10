export default class Moods {
  constructor(storage) {
    this.storage = storage;
    this.$tabContents = document.querySelector("#tab-contents");
    this._initializeContent();
  }

  _initializeContent() {
    const moods = this.storage.getAll();
    this.$tabContents.innerHTML = `
        <div class="tab-content active">
            <div id="mood-list">${
              moods.length === 0 ? "Tu n'as pas encore d'émotions" : ""
            }</div>
            <div class="field has-addons">
                <div class="control">
                    <input id="mood-field" class="input" type="text" placeholder="Ex: Joie">
                </div>
                <div class="control">
                    <button id="add-mood" class="button is-danger">
                        <span class="icon is-small">
                            <i class="fa-solid fa-plus"></i>
                        </span>
                    </button>
                </div>
            </div>
            ${
              moods.length > 0
                ? `<button id="clear-all" class="button is-danger">
                <span>Tout supprimer</span>
                <span class="icon is-small">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </button>`
                : ""
            }
        </div>    
    `;
    setTimeout(() => {
      this.$moodList = document.querySelector("#mood-list");
      this.$addMood = document.querySelector("#add-mood");
      this.$moodField = document.querySelector("#mood-field");
      this.$clearAll = document.querySelector("#clear-all");
      this.$addMood.addEventListener("click", () => {
        const mood = this.$moodField.value;
        if (mood?.trim().length === 0) {
          return;
        }
        this.storage.add(mood);
        this._initializeContent();
      });
      if (this.$clearAll) {
        this.$clearAll.addEventListener("click", () => {
          this.storage.clearAll();
          this._initializeContent();
        });
      }
      this._displayMoods();
    }, 50);
  }

  _displayMoods() {
    const moods = this.storage.getAll();
    for (const mood of moods) {
      this.$moodList.insertAdjacentHTML(
        "beforeend",
        `
            <div id="${mood.id}" class="config">
                <span>${mood.value}</span>
                <button id="delete-mood" class="button is-danger">
                    <span class="icon is-small">
                        <i class="fa-solid fa-trash"></i>
                    </span>
                </button>
            </div>
        `
      );
    }
    setTimeout(() => {
      const deleteButtons = document.querySelectorAll("#delete-mood");
      for (const $button of deleteButtons) {
        $button.addEventListener("click", (event) => {
          const $closest = event.target.closest("#delete-mood");
          if (!$closest) {
            return;
          }
          const configDiv = $closest.closest(".config");
          const moodId = configDiv.id;
          this.storage.delete(moodId);
          this._initializeContent();
        });
      }
    }, 50);
  }
}
