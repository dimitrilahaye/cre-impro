import generateUUID from "../utils/uuid";

export default class CharactersStorage {
  constructor(storage) {
    this.storage = storage;
  }

  getAll() {
    return this.storage.get("characters") ?? [];
  }

  getRandom() {
    const characters = this.getAll();
    return characters[Math.floor(Math.random() * characters.length)];
  }

  add(character) {
    const characters = this.getAll() ?? [];
    characters.push({
      id: generateUUID(),
      value: character.trim(),
    });
    this.storage.set("characters", characters);
  }

  delete(characterId) {
    const characters = this.getAll() ?? [];
    if (characters.length === 0) {
      return;
    }
    const newMoods = characters.filter((character) => character.id !== characterId);
    this.storage.set("characters", newMoods);
  }

  clearAll() {
    this.storage.remove("characters");
  }
}
