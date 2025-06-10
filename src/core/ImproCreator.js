export default class ImproCreator {
  constructor(moodsStorage, placesStorage, charactersStorage) {
    this.moodsStorage = moodsStorage;
    this.placesStorage = placesStorage;
    this.charactersStorage = charactersStorage;
  }

  create() {
    const mood = this.moodsStorage.getRandom();
    const place = this.placesStorage.getRandom();
    const character = this.charactersStorage.getRandom();

    return [mood.value, place.value, character.value];
  }
}
