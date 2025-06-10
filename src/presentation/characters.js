export default class Characters {
  constructor(storage) {
    this.storage = storage;
    this.$tabContents = document.querySelector("#tab-contents");
    this._initializeContent();
  }

  _initializeContent() {
    const characters = this.storage.getAll();
    this.$tabContents.innerHTML = `
        <div class="tab-content active">
            <div id="character-list">${
              characters.length === 0 ? "Tu n'as pas encore de personnages" : ""
            }</div>
            <div class="field has-addons">
                <div class="control">
                    <input id="character-field" class="input" type="text" placeholder="Ex: Un chevalier">
                </div>
                <div class="control">
                    <button id="add-character" class="button is-danger">
                        <span class="icon is-small">
                            <i class="fa-solid fa-plus"></i>
                        </span>
                    </button>
                </div>
            </div>
            ${
              characters.length > 0
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
      this.$characterList = document.querySelector("#character-list");
      this.$addCharacter = document.querySelector("#add-character");
      this.$characterField = document.querySelector("#character-field");
      this.$clearAll = document.querySelector("#clear-all");
      this.$addCharacter.addEventListener("click", () => {
        const character = this.$characterField.value;
        if (character?.trim().length === 0) {
          return;
        }
        this.storage.add(character);
        this._initializeContent();
      });
      if (this.$clearAll) {
        this.$clearAll.addEventListener("click", () => {
          this.storage.clearAll();
          this._initializeContent();
        });
      }
      this._displayCharacters();
    }, 50);
  }

  _displayCharacters() {
    const characters = this.storage.getAll();
    for (const character of characters) {
      this.$characterList.insertAdjacentHTML(
        "beforeend",
        `
            <div id="${character.id}" class="config">
                <span>${character.value}</span>
                <button id="delete-character" class="button is-danger">
                    <span class="icon is-small">
                        <i class="fa-solid fa-trash"></i>
                    </span>
                </button>
            </div>
        `
      );
    }
    setTimeout(() => {
      const deleteButtons = document.querySelectorAll("#delete-character");
      for (const $button of deleteButtons) {
        $button.addEventListener("click", (event) => {
          const $closest = event.target.closest("#delete-character");
          if (!$closest) {
            return;
          }
          const configDiv = $closest.closest(".config");
          const characterId = configDiv.id;
          this.storage.delete(characterId);
          this._initializeContent();
        });
      }
    }, 50);
  }
}
