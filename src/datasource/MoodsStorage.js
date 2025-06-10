import generateUUID from "../utils/uuid";

export default class MoodsStorage {
  constructor(storage) {
    this.storage = storage;
  }

  getAll() {
    return this.storage.get("moods") ?? [];
  }

  getRandom() {
    const moods = this.getAll();
    return moods[Math.floor(Math.random() * moods.length)];
  }

  add(mood) {
    const moods = this.getAll() ?? [];
    moods.push({
      id: generateUUID(),
      value: mood.trim(),
    });
    this.storage.set("moods", moods);
  }

  delete(moodId) {
    const moods = this.getAll() ?? [];
    if (moods.length === 0) {
      return;
    }
    const newMoods = moods.filter((mood) => mood.id !== moodId);
    this.storage.set("moods", newMoods);
  }

  clearAll() {
    this.storage.remove("moods");
  }
}
