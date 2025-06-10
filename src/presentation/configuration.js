import Moods from "./moods";
import Places from "./places";
import Characters from "./characters";
import Students from "./students";
import MoodsStorage from "../datasource/MoodsStorage";
import PlacesStorage from "../datasource/PlacesStorage";
import StudentsStorage from "../datasource/StudentsStorage";
import CharactersStorage from "../datasource/CharactersStorage";
import LocalStorageWrapper from "../datasource/storage";
import ImproCreator from "../core/ImproCreator";

export default class Configuration {
  constructor() {
    this.$container = document.querySelector("#configuration");
    this.$moods = this.$container.querySelector("#moods");
    this.$moods.addEventListener("click", () => {
      this.activeMoods();
    });
    this.$places = this.$container.querySelector("#places");
    this.$places.addEventListener("click", () => {
      this.activePlaces();
    });
    this.$characters = this.$container.querySelector("#characters");
    this.$characters.addEventListener("click", () => {
      this.activeCharacters();
    });
    this.$students = this.$container.querySelector("#students");
    this.$students.addEventListener("click", () => {
      this.activeStudents();
    });
    this.activeMoods();
  }

  activeMoods() {
    if (this.$activeTab) {
      this.$activeTab.classList.remove("is-active");
    }
    new Moods(new MoodsStorage(new LocalStorageWrapper()));
    this.$moods.classList.add("is-active");
    this.$activeTab = this.$moods;
  }

  activePlaces() {
    if (this.$activeTab) {
      this.$activeTab.classList.remove("is-active");
    }
    new Places(new PlacesStorage(new LocalStorageWrapper()));
    this.$places.classList.add("is-active");
    this.$activeTab = this.$places;
  }

  activeCharacters() {
    if (this.$activeTab) {
      this.$activeTab.classList.remove("is-active");
    }
    new Characters(new CharactersStorage(new LocalStorageWrapper()));
    this.$characters.classList.add("is-active");
    this.$activeTab = this.$characters;
  }

  activeStudents() {
    if (this.$activeTab) {
      this.$activeTab.classList.remove("is-active");
    }
    new Students(
      new StudentsStorage(new LocalStorageWrapper()),
      new ImproCreator(
        new MoodsStorage(new LocalStorageWrapper()),
        new PlacesStorage(new LocalStorageWrapper()),
        new CharactersStorage(new LocalStorageWrapper())
      )
    );
    this.$students.classList.add("is-active");
    this.$activeTab = this.$students;
  }
}
