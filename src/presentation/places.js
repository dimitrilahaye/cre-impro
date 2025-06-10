export default class Places {
  constructor(storage) {
    this.storage = storage;
    this.$tabContents = document.querySelector("#tab-contents");
    this._initializeContent();
  }

  _initializeContent() {
    const places = this.storage.getAll();
    this.$tabContents.innerHTML = `
        <div class="tab-content active">
            <div id="place-list">${
              places.length === 0 ? "Tu n'as pas encore de lieux" : ""
            }</div>
            <div class="field has-addons">
                <div class="control">
                    <input id="place-field" class="input" type="text" placeholder="Ex: Un palace">
                </div>
                <div class="control">
                    <button id="add-place" class="button is-danger">
                        <span class="icon is-small">
                            <i class="fa-solid fa-plus"></i>
                        </span>
                    </button>
                </div>
            </div>
            ${
              places.length > 0
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
      this.$placeList = document.querySelector("#place-list");
      this.$addPlace = document.querySelector("#add-place");
      this.$placeField = document.querySelector("#place-field");
      this.$clearAll = document.querySelector("#clear-all");
      this.$addPlace.addEventListener("click", () => {
        const place = this.$placeField.value;
        if (place?.trim().length === 0) {
          return;
        }
        this.storage.add(place);
        this._initializeContent();
      });
      if (this.$clearAll) {
        this.$clearAll.addEventListener("click", () => {
          this.storage.clearAll();
          this._initializeContent();
        });
      }
      this._displayPlaces();
    }, 50);
  }

  _displayPlaces() {
    const places = this.storage.getAll();
    for (const place of places) {
      this.$placeList.insertAdjacentHTML(
        "beforeend",
        `
            <div id="${place.id}" class="config">
                <span>${place.value}</span>
                <button id="delete-place" class="button is-danger">
                    <span class="icon is-small">
                        <i class="fa-solid fa-trash"></i>
                    </span>
                </button>
            </div>
        `
      );
    }
    setTimeout(() => {
      const deleteButtons = document.querySelectorAll("#delete-place");
      for (const $button of deleteButtons) {
        $button.addEventListener("click", (event) => {
          const $closest = event.target.closest("#delete-place");
          if (!$closest) {
            return;
          }
          const configDiv = $closest.closest(".config");
          const placeId = configDiv.id;
          this.storage.delete(placeId);
          this._initializeContent();
        });
      }
    }, 50);
  }
}
