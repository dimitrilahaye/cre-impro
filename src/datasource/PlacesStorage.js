import generateUUID from "../utils/uuid";

export default class PlacesStorage {
  constructor(storage) {
    this.storage = storage;
  }

  getAll() {
    return this.storage.get("places") ?? [];
  }

  getRandom() {
    const places = this.getAll();
    return places[Math.floor(Math.random() * places.length)];
  }

  add(place) {
    const places = this.getAll() ?? [];
    places.push({
      id: generateUUID(),
      value: place.trim(),
    });
    this.storage.set("places", places);
  }

  delete(placeId) {
    const places = this.getAll() ?? [];
    if (places.length === 0) {
      return;
    }
    const newMoods = places.filter((place) => place.id !== placeId);
    this.storage.set("places", newMoods);
  }

  clearAll() {
    this.storage.remove("places");
  }
}
